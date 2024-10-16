import Image from "next/image";
import myImage from "./image/download.jpg"; // Replace with your actual image path

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">Hi, I&apos;m Neeraj!</h1>
        <p className="text-xl mb-6">
          A passionate BCA student exploring the world of tech.
          <br /> I love creating unique web experiences and diving deep into
          code!
        </p>
        <div className="w-48 h-48 relative mb-6">
          <Image
            src={myImage}
            alt="Neeraj"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-purple-500"
          />
        </div>
        <a
          href="#projects"
          className="bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-purple-600">
          View My Projects
        </a>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">JavaScript</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">React</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Next.js</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Node.js</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">MongoDB</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-10 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Project Title 1</h3>
            <p className="mb-4">Brief description of the project goes here.</p>
            <a href="#" className="text-purple-500 hover:underline">
              View Project
            </a>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Project Title 2</h3>
            <p className="mb-4">Brief description of the project goes here.</p>
            <a href="#" className="text-purple-500 hover:underline">
              View Project
            </a>
          </div>
          {/* Project Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Project Title 3</h3>
            <p className="mb-4">Brief description of the project goes here.</p>
            <a href="#" className="text-purple-500 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        <p className="text-center mb-4">
          Feel free to reach out for collaborations or just to chat!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:your-email@example.com" // Replace with your email
            className="bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-purple-600">
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-900 text-center">
        <p>&copy; {new Date().getFullYear()} Neeraj. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
