import React from "react";

const Stats: React.FC = () => {
  const data = [
    { label: "Satisfied clients", value: "10+" },
    { label: "Projects completed", value: "20+" },
    { label: "Reviews given", value: "7" },
  ];

  return (
    <section className="py-12 flex justify-center gap-16 bg-white">
      {data.map((item, i) => (
        <div key={i} className="text-center">
          <h3 className="text-3xl font-bold text-green-600">{item.value}</h3>
          <p className="text-gray-600 mt-2">{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
