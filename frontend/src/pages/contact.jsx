import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message envoyé !'); // message temporaire
        setFormData({ name: '', email: '', message: '' }); // reset form
    }; 
    

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contactez-nous</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition h-36 resize-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                    >
                        <FaPaperPlane /> Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
