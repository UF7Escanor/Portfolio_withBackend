// import React, { useState } from "react";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Message sent!");
//   };

//   return (
//     <section id="contact" className="py-16 px-10 ">
//       <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//         {/* Left - Contact Info */}
//         <div className="space-y-6">
//           <div>
//             <h4 className="font-semibold text-lg">📞 Call me</h4>
//             <p>+880 1234 556667</p>
//           </div>
//           <div>
//             <h4 className="font-semibold text-lg">📧 Email</h4>
//             <p>tanvir99@gmail.com</p>
//           </div>
//           <div>
//             <h4 className="font-semibold text-lg">📍 Address</h4>
//             <p>Zindabari, Sylhet, Bangladesh</p>
//           </div>
//         </div>

//         {/* Right - Form */}
//         <form
//           onSubmit={handleSubmit}
//           className=" p-8 rounded-xl space-y-4 shadow-2xl shadow-gray-800"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             className="w-full border  p-3 rounded-md"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your email"
//             className="w-full border  p-3 rounded-md"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="w-full border p-3 rounded-md"
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your message"
//             rows={4}
//             className="w-full border p-3 rounded-md"
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
// import ContactImg from "../assets/ContactImg.png";
// import RandomTitle from "./RandomTitle";
// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.send(
//         "service_q1et5c4",
//         "template_y3qwedg",
//         { ...formData },
//         "Ro4lFbtTY1ZWLBtQL",
//       );

//       toast.success("Message sent successfully ✅");

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error("Failed to send message ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className=" items-center pt-10">
//       <RandomTitle title="Contact" description="Discuss Your Projects" />
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 mt-8 mb-5 ">
//         {/* LEFT - IMAGE */}
//         <div className="flex-1 mt-20 ml-20 ">
//           <img
//             src={ContactImg}
//             alt="Contact"
//             className="rounded-xl w-50 h-50 object-cover"
//           />
//           <div className="mt-10">
//             <h4 className="font-semibold text-lg">Address</h4>
//             <p>Pokhara,Nepal</p>
//           </div>
//         </div>

//         {/* RIGHT - FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex-1 p-8 rounded-xl space-y-4 shadow-2xl"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             className="w-full border p-3 rounded-md"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your email"
//             className="w-full border p-3 rounded-md"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="w-full border p-3 rounded-md"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your message"
//             rows={4}
//             className="w-full border p-3 rounded-md"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-6 py-2 rounded-md text-white transition ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-green-600 hover:bg-green-700"
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//       <footer className="w-full ">
//         {/* top divider line */}
//         <div className="h-px w-full bg-teal-400" />

//         <div className="py-6 text-center">
//           <p className="text-sm text-teal-400">© 2025. All Rights Reserved</p>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Contact;

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import toast from "react-hot-toast";

import ContactImg from "../assets/ContactImg.png";

emailjs.init({
  publicKey: "Ro4lFbtTY1ZWLBtQL",
  blockHeadless: true,
  limitRate: {
    id: "portfolio-contact",
    throttle: 10000,
  },
});

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_yebw0wo",
        "template_loctbbj",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "Ro4lFbtTY1ZWLBtQL",
        },
      );

      toast.success("Message sent successfully!");
      setFormData(initialFormData);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS text:", error?.text);

      const message =
        error?.text ||
        "EmailJS rejected the request. Please check the service/template settings.";

      toast.error(`Failed to send message: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-center py-10 px-5 md:px-10"
    >
      {/* Heading */}
      {/* <div className="mb-7">
        <RandomTitle title="Contact" description="Discuss Your Projects" />
      </div> */}

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-xl border border-[#00F5FF]/40 rotate-3" />

            <img
              src={ContactImg}
              alt="Contact illustration"
              className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Let's work together
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new ideas and opportunities.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center text-lg">
                📍
              </div>

              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm text-white font-medium">Pokhara, Nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center text-lg">
                ✉️
              </div>

              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white font-medium">
                  Feel free to contact me
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full p-5 md:p-6 rounded-xl border border-gray-700/60 bg-gray-900/40 shadow-xl space-y-3.5"
          >
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">
                Send Me a Message
              </h3>

              <p className="text-gray-400 text-xs mt-1">
                I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs text-gray-300">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full bg-gray-800/70 border border-gray-700 text-white text-sm p-2.5 rounded-lg outline-none transition focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] placeholder:text-gray-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs text-gray-300">
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full bg-gray-800/70 border border-gray-700 text-white text-sm p-2.5 rounded-lg outline-none transition focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] placeholder:text-gray-500"
              />
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs text-gray-300">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/70 border border-gray-700 text-white text-sm p-2.5 rounded-lg outline-none transition focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] placeholder:text-gray-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs text-gray-300">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/70 border border-gray-700 text-white text-sm p-2.5 rounded-lg outline-none resize-none transition focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] placeholder:text-gray-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00F5FF] to-[#3B82F6] text-[#021018] text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#00F5FF]/30 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
