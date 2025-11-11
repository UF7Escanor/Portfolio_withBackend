import React from "react";
import BoxCard from "./BoxCard";

interface Skill {
  title: string;
  description: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "Visual Design",
      description:
        "I craft clean, modern, and visually appealing interfaces that balance creativity with usability. My designs focus on enhancing user satisfaction through clarity, color harmony, and detail.",
    },
    {
      title: "UX Research",
      description:
        "I understand user behavior through data-driven insights, research, and testing. This helps me design intuitive experiences that not only look good but work seamlessly in real-world scenarios.",
    },
    {
      title: "Design Prototyping",
      description:
        "I use tools like Figma to translate ideas into interactive prototypes that clearly communicate flow, functionality, and user interactions before development begins.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-500">
      <section className="py-16 px-5" id="skills">
        <h2 className="text-3xl font-bold mb-6">
          Why Hire Me For Your Next{" "}
          <span className="text-green-600">Project?</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          I’m a passionate{" "}
          <span className="text-green-600 font-semibold">UI/UX Designer</span>{" "}
          and
          <span className="text-green-600 font-semibold">
            {" "}
            Frontend Developer
          </span>{" "}
          with a strong foundation in modern web technologies such as{" "}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">Node.js</span>, and{" "}
          <span className="font-semibold">MongoDB</span>. I bring together
          design and development skills to build interfaces that are both
          visually engaging and technically robust.
          {/* My focus is on crafting
          digital experiences that not only look great but also perform
          flawlessly. */}
        </p>

        <div className="flex flex-col md:flex-row justify-between">
          <div>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition mt-4 max-w-xl"
              >
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="mr-12 mt-40">
            <BoxCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
