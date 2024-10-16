// app/about.js
import Image from "next/image";
import myImage from "../image/me.jpeg"; // Replace with your image path
export default function About() {
  return (
    <div className="bg-[#f8f4e3]  grid grid-rows p-10 pl-[10vw]">
      {/* Hero Section */}
      <div className="flex max-2xl:flex-col gap-5 mb-10 ">
        <div className="relative min-w-40 min-h-40 max-w-40 max-h-40 max-lg:ml-10   mb-4  p-6   transform transition-transform hover:scale-105">
          <Image
            src={myImage}
            alt="Neeraj Vishwakarma"
            layout="fill"
            className="rounded-full border-4 border-purple-500 object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 30vw"
          />
        </div>
        <div className="flex flex-col bg-white p-4 shadow-md rounded-lg ">
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
          </div>
          <div>
            <p className="text-lg max-w-5xl  min-h-40 mx-auto">
              I&apos;m Neeraj Vishwakarma, a passionate BCA student and web
              developer based in [Your Location]. My journey into the tech world
              started when [briefly share how you got started]. Since then,
              I&apos;ve dedicated myself to honing my skills and creating
              beautiful, functional websites.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Story */}
      <div className="grid grid-rows 2xl:ml-44  ">
        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg max-w-2xl mx-auto">
            [Share your personal story here, including challenges faced and
            significant achievements. Make it engaging and relatable. Use
            paragraphs to break up text for easier reading.]
          </p>
        </section>

        <section className="mb-10 bg-slate-200 p-4 shadow-lg rounded-lg max-w-[66rem] border border-gray-300">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
            Skills & Expertise
          </h2>
          <ul className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">JavaScript</h3>
              <p className="text-gray-600">
                Expert in building interactive web applications.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React</h3>
              <p className="text-gray-600">
                Creating dynamic user interfaces with React.
              </p>
            </li>
          </ul>
        </section>

        {/* Values and Philosophy */}
        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">My Values</h2>
          <p className="text-lg max-w-2xl mx-auto">
            [Share your values, such as commitment to quality, user-centric
            design, etc.]
          </p>
        </section>
        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="/projects/project1"
                className="text-blue-600 hover:underline">
                Project 1: [Brief Description]
              </a>
            </li>
            <li>
              <a
                href="/projects/project2"
                className="text-blue-600 hover:underline">
                Project 2: [Brief Description]
              </a>
            </li>
            {/* Add more project links as needed */}
          </ul>
        </section>
        {/* Call to Action */}
        <section className="text-center bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
          <p className="text-lg mb-4">
            I would love to hear from you. Feel free to reach out!
          </p>
          <a
            href="/contact"
            className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
}
