import React from "react";

interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Alex Jorden",
      feedback:
        "We’re satisfied with the services and working of Tanvir. Excellent project delivery and design approach.",
      rating: 5,
      image: "/user1.png",
    },
    {
      name: "Maria Ahmed",
      feedback:
        "Highly recommended! Tanvir brought our ideas to life with professionalism and creativity.",
      rating: 5,
      image: "/user2.png",
    },
    {
      name: "John Smith",
      feedback:
        "Very professional designer with great attention to detail and strong UX understanding.",
      rating: 5,
      image: "/user3.png",
    },
  ];

  return (
    <section id="testimonial" className="py-16 px-10 bg-white">
      <div className="text-center mb-10">
        <p className="text-green-500 font-semibold">Reviews</p>
        <h2 className="text-3xl font-bold">
          Our Customer Say Something{" "}
          <span className="text-green-600">About Us</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md p-6 rounded-xl hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4 space-x-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h4 className="font-semibold">{t.name}</h4>
            </div>
            <p className="text-gray-600 mb-3">{t.feedback}</p>
            <div className="text-yellow-400">{"★".repeat(t.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
