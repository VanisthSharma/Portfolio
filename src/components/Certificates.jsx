const certificates = [
  { name: "Hackerrank - Frontend Developer (React.js)", link: "https://www.hackerrank.com/certificates/13b4d508881b" },
  { name: "Hackerrank - Problem Solving (Basic)", link: "https://www.hackerrank.com/certificates/579d6cfa89bf" },
  { name: "Hackerrank - JavaScript (Intermediate)", link: "https://www.hackerrank.com/certificates/9b68a42c3999" },
  { name: "Hackerrank - JavaScript (Basic)", link: "https://www.hackerrank.com/certificates/b32b2edd34b4" },
  { name: "Hackerrank - CSS (Basic)", link: "https://www.hackerrank.com/certificates/aee00581328e" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-white mb-10">Certificates</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {certificates.map((cert, index) => (
          <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer"
             className="block p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            {cert.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
