import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const TechSlider = () => {
  const technologies = [
    { id: 1, name: "HTML5", color: "#E34C26", icon: FaHtml5 },
    { id: 2, name: "CSS3", color: "#1572B6", icon: FaCss3Alt },
    { id: 3, name: "JavaScript", color: "#F7DF1E", icon: FaJs },
    { id: 4, name: "React", color: "#61DAFB", icon: FaReact },
    { id: 5, name: "Bootstrap", color: "#7952B3", icon: FaBootstrap },
    { id: 6, name: "Node.js", color: "#68A063", icon: FaNodeJs },
    { id: 7, name: "MongoDB", color: "#13AA52", icon: SiMongodb },
    { id: 8, name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { id: 9, name: "Vue.js", color: "#4FC08D", icon: SiVuedotjs },
    { id: 10, name: "Docker", color: "#2496ED", icon: FaDocker },
  ];

  const repeatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-16">
        Technologies & Languages
      </h2>


      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="w-full overflow-hidden">
        <div className="scroll-container flex gap-20 items-center">
          {repeatedTechs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={`${tech.id}-${index}`}
                className="flex flex-col items-center group"
              >

                <Icon
                  className="text-6xl cursor-pointer transition-all duration-300 group-hover:scale-110"
                  style={{ color: "#9CA3AF" }}
                  onMouseEnter={(e) => (e.target.style.color = tech.color)}
                  onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
                />

                <span className="text-gray-400 mt-5 text-md transition group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
