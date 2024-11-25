import React, { useState } from 'react';
import { CourseCreator } from '../components/CourseCreator';
import { MessageCircle } from 'lucide-react';

export const CourseCreatorApp = () => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, 
      { role: 'user', content: input },
      { role: 'assistant', content: 'I am analyzing your request...' }
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-[70%] p-6">
        <CourseCreator />
      </div>

      <div className="w-[30%] border-l">
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-lg ${
                  message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about creating your course..."
                className="flex-1 rounded-lg border p-2"
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                <MessageCircle size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};