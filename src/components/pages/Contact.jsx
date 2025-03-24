import React, { useState } from 'react'
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
      setFormError('Form fields cannot be empty');
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
    <>
      <div className="flex items-center justify-center  ">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-lg relative border-2 border-gray-300">
          <h1 onClick={deleteForm} className='absolute top-0 right-0 text-2xl md:text-3xl font-bold text-gray-400 mb-4 cursor-pointer px-3'>x</h1>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[18px] font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#900002] focus:ring-[#900002] sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[18px] font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="p-2 mt-1 block w-full rounded-md  shadow-sm focus:border-[#900002] focus:ring-[#900002] sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[18px] font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                className="px-4 py-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#900002] focus:ring-[#900002] sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            {formError && (
              <p className="text-red-500  text-center text-xl">{formError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#900002] text-white py-2 px-4 rounded-md hover:bg-[#900002]/90 "
            >
              Send Message
            </button>
            {result && (
              <h1 className="text-center mt-2 text-gray-700">{result}</h1>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;