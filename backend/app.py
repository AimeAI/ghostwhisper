# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from embeddings import embed_and_store, get_relevant_chunks
from openai import OpenAI
import os

app = Flask(__name__)
CORS(app)

openai_api_key = os.getenv("OPENAI_API_KEY")  # Or use Gemini/OpenRouter logic
openai_model = "gpt-3.5-turbo"  # Replace if using Gemini

# TEMP: Store chunks in memory
persona_chunks = {}

@app.route("/upload", methods=["POST"])
def upload():
    file = request.files['file']
    name = request.form['name']
    role = request.form['role']
    tone = request.form['tone']

    content = file.read().decode("utf-8", errors="ignore")
    chunks = embed_and_store(content)
    persona_id = f"{name}-{role}-{tone}"
    persona_chunks[persona_id] = chunks

    return jsonify(success=True)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data['message']
    persona = data['persona']
    persona_id = f"{persona['name']}-{persona['role']}-{persona['tone']}"
    chunks = persona_chunks.get(persona_id, [])

    relevant = get_relevant_chunks(message, chunks)
    context = "\n".join(relevant)

    prompt = f"You are a helpful assistant trained on the following data:\n\n{context}\n\nUser: {message}\nAI:"

    # TEMP – raw OpenAI call
    client = OpenAI(api_key=openai_api_key)
    res = client.chat.completions.create(
        model=openai_model,
        messages=[
            {"role": "system", "content": "You are a helpful company-specific AI expert."},
            {"role": "user", "content": prompt}
        ]
    )
    reply = res.choices[0].message.content.strip()
    return jsonify(reply=reply)
