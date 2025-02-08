
const skills = [
  { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
  { name: "CSS", link: "https://en.wikipedia.org/wiki/CSS" },
  { name: "JavaScript", link: "https://en.wikipedia.org/wiki/JavaScript" },
  { name: "React.js", link: "https://en.wikipedia.org/wiki/React_(software)" },
  { name: "Tailwind CSS", link: "https://en.wikipedia.org/wiki/Tailwind_CSS" },
  { name: "Bootstrap", link: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" },
  { name: "jQuery", link: "https://en.wikipedia.org/wiki/JQuery" },
  { name: "Node.js", link: "https://en.wikipedia.org/wiki/Node.js" },
  { name: "Python", link: "https://en.wikipedia.org/wiki/python" },
  { name: "Algorithms : 50+ Problems ", link: "https://en.wikipedia.org/wiki/algorithms" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {skills.map((skill, index) => (
          <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer"
            className="block p-6 rounded-lg text-white bg-[#121212] transition-all duration-300 transform hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-black hover:scale-105 cursor-pointer shadow-md">
            <h3 className="text-2xl font-semibold">{skill.name}</h3>
            <p className="text-sm opacity-80 mt-2">Learn more on Wikipedia</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
