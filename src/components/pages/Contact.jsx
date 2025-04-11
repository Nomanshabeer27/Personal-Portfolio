import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [result, setResult] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const deleteForm = () => {
    navigate('/');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormError('');
    setResult('');
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setFormError('All fields are required.');
      return;
    }

    setResult('Sending...');
    formData.append('access_key', '178a59ab-a8a0-4d12-95e5-b57a4f38b727');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset(); // Reset the form
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="shadow-lg rounded-lg p-8 md:p-12 w-full max-w-lg relative border ">
        <h1
          onClick={deleteForm}
          className="absolute top-0 right-0 text-2xl md:text-3xl font-bold text-white mb-4 cursor-pointer px-3"
        >
          x
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold text-center  text-white">
          Contact Us
        </h1>
        <form onSubmit={onSubmit} className="space-y-6">
          {formError && (
            <p className="text-red-500 text-center text-lg">{formError}</p>
          )}
          {result && (
            <p className="text-green-500 text-center text-lg">{result}</p>
          )}
          <div>
            <label
              htmlFor="name"
              className="block text-white font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;