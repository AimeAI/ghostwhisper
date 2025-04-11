# backend/embeddings.py

import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import re

def chunk_text(text, chunk_size=300):
    sentences = re.split(r'(?<=[.?!])\s+', text)
    chunks = []
    current = []
    count = 0
    for s in sentences:
        current.append(s)
        count += len(s.split())
        if count >= chunk_size:
            chunks.append(" ".join(current))
            current, count = [], 0
    if current:
        chunks.append(" ".join(current))
    return chunks

def embed(text):
    # TEMP: Fake vector using hash
    return np.random.rand(512)

def embed_and_store(content):
    chunks = chunk_text(content)
    vectors = [(chunk, embed(chunk)) for chunk in chunks]
    return vectors

def get_relevant_chunks(query, vectors, top_k=3):
    query_vec = embed(query)
    sims = [(chunk, cosine_similarity([query_vec], [vec])[0][0]) for chunk, vec in vectors]
    sims.sort(key=lambda x: x[1], reverse=True)
    return [chunk for chunk, _ in sims[:top_k]]
