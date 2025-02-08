import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header className="h-screen flex flex-col items-center justify-center text-center bg-[url('/your-image.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-white">Vanisth Sharma</h1>
        <TypeAnimation
          sequence={["Front-end Developer", 2000, "React Enthusiast", 2000, "JavaScript Lover", 2000]}
          wrapper="h2"
          className="text-2xl text-gray-300 mt-4"
          repeat={Infinity}
        />
        <div className="mt-6 flex justify-center gap-4">
          <a href="#skills" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">Skills</a>
          <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Projects</a>
          <a href="#certificates" className="px-6 py-3 bg-sky-400 text-white rounded-lg hover:bg-sky-700 transition">Certificates</a>
          <a href="#footer" className="px-6 py-3 bg-sky-400 text-white rounded-lg hover:bg-sky-700 transition">Footer</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
