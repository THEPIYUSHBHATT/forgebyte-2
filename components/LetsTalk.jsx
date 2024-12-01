'use client';

import { useState } from 'react';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {/* Left side with text */}
      <div className="w-full md:w-1/2 max-w-md">
        <Image src="/assets/letsTalk.png" alt="Let's Talk" width={800} height={600} className="w-full h-auto" />
        
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl"
        >
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            text={isSubmitting ? 'Sending...' : 'Send'}
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-medium transition duration-200 ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-200 to-blue-300 hover:opacity-90'
              }`}
          >
            {/* {isSubmitting ? 'Sending...' : 'Send'} */}
          </Button>

          {submitStatus === 'success' && (
            <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}