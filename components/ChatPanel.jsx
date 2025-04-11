// frontend/src/components/ChatPanel.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ChatPanel = ({ persona }) => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: 'you', text: input };
    setChat([...chat, newUserMessage]);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/chat', {
        message: input,
        persona
      });

      setChat(prev => [...prev, { sender: 'ghost', text: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setChat(prev => [...prev, { sender: 'ghost', text: '⚠️ Something went wrong.' }]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto space-y-4 mb-4">
        {chat.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.sender === 'you' ? 'text-right text-purple-300' : 'text-left text-purple-100'}`}>
            <span className="block">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-grow p-2 rounded border border-purple-700 bg-black text-white"
          value={input}
          placeholder="Ask your Ghost anything..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-purple-600 px-4 rounded text-white font-semibold hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
