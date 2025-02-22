
const projects = [
  { name: "Mevvbot", link: "https://mevvbot.netlify.app/", image: "/Mevvbot.jpg" },
  { name: "Social Media Clone", link: "https://react-social-posts-app.netlify.app/", image: "/Social.webp" },
  { name: "Shopping App", link: "https://vanisth-shopping-app.netlify.app/", image: '/Shopping-App.webp' },
  { name: "Calculator", link: "https://vanisth-sharma-calculator.netlify.app/", image: "/Calc.webp" },
  { name: "Theme Changer", link: "https://react-theme-changer.netlify.app/", image: "/Theme.webp" },
  { name: "React Auth Dashboard", link: "https://authentication-dashboard-react.netlify.app/", image: "/Dashboard.webp" },
  { name: "React Habit Tracker", link: "https://basic-react-habit-tracker.netlify.app/", image: "/Habit.webp" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 px-10">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="relative group">
            <img src={project.image} alt={project.name} className="w-full rounded-lg shadow-lg transform group-hover:scale-102 transition" />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:scale-102 transition">
              <p className="text-white text-lg font-semibold">{project.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
