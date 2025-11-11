import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-16 px-10  bg-amber-300">
      <div className="text-center mb-10">
        <p className="text-green-500 font-semibold">Contact</p>
        <h2 className="text-3xl font-bold">
          Let’s Discuss Your <span className="text-green-600">Project</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Let’s create something new, different, and more meaningful together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">📞 Call me</h4>
            <p className="text-gray-600">+880 1234 556667</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">📧 Email</h4>
            <p className="text-gray-600">tanvir99@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">📍 Address</h4>
            <p className="text-gray-600">Zindabari, Sylhet, Bangladesh</p>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl space-y-4 shadow-2xl shadow-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border border-gray-300 p-3 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border border-gray-300 p-3 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded-md"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
