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

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ContactImg from "../assets/ContactImg.png";
import RandomTitle from "./RandomTitle";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_q1et5c4",
        "template_y3qwedg",
        { ...formData },
        "Ro4lFbtTY1ZWLBtQL"
      );

      toast.success("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className=" items-center pt-10">
      <RandomTitle title="Contact" description="Lets Discuss Your Projects" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 mt-8 mb-5 ">
        {/* LEFT - IMAGE */}
        <div className="flex-1 mt-20 ml-20 ">
          <img
            src={ContactImg}
            alt="Contact"
            className="rounded-xl w-50 h-50 object-cover"
          />
          <div className="mt-10">
            <h4 className="font-semibold text-lg">Address</h4>
            <p>Pokhara,Nepal</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 p-8 rounded-xl space-y-4 shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border p-3 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border p-3 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border p-3 rounded-md"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            className="w-full border p-3 rounded-md"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-md text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <footer className="w-full ">
        {/* top divider line */}
        <div className="h-px w-full bg-teal-400" />

        <div className="py-6 text-center">
          <p className="text-sm text-teal-400">© 2025. All Rights Reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
