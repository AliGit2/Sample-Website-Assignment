"use client";

import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail(''); // Reset the input after submission
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="button-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}
