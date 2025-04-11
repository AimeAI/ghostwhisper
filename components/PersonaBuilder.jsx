// frontend/src/components/PersonaBuilder.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PersonaBuilder = ({ onPersonaReady, onUploadComplete }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [tone, setTone] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || !name || !role || !tone) return alert("Please complete all fields and upload a file.");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('role', role);
      formData.append('tone', tone);

      const res = await axios.post('http://localhost:5000/upload', formData); // Replace with Railway URL later
      if (res.data.success) {
        onPersonaReady({ name, role, tone });
        onUploadComplete();
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Name (e.g., Ava)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 bg-black border border-purple-700 rounded"
      />
      <input
        type="text"
        placeholder="Role (e.g., Project Manager)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 bg-black border border-purple-700 rounded"
      />
      <input
        type="text"
        placeholder="Tone (e.g., Friendly, Direct)"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
