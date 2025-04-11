# backend/persona_memory.py

# Optional: in-memory persona store (stubbed for now)

persona_store = {}

def save_persona(persona_id, chunks):
    persona_store[persona_id] = chunks

def load_persona(persona_id):
    return persona_store.get(persona_id, [])
