import React, { useState } from 'react';
import PersonaBuilder from './components/PersonaBuilder';
import ChatPanel from './components/ChatPanel';

const App = () => {
  const [persona, setPersona] = useState(null);
  const [docUploaded, setDocUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans">
      <div className="w-full md:w-1/3 p-6 border-r border-purple-900 bg-[#0a0a0a]">
        <h1 className="text-2xl font-bold mb-4 text-purple-400">Ghost Whisper</h1>
        <PersonaBuilder
          onPersonaReady={setPersona}
          onUploadComplete={() => setDocUploaded(true)}
        />
      </div>
      <div className="w-full md:w-2/3 p-6">
        {persona && docUploaded ? (
          <ChatPanel persona={persona} />
        ) : (
          <div className="text-purple-300 opacity-50 mt-24 text-center">
            <p className="text-xl">👻 Your Ghost Persona will appear here once it's created.</p>
            <p className="text-sm mt-2">Fill out the form and upload a document to begin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
