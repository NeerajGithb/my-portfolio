import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-8">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide mb-4">
          My Resume
        </h1>
        <p className="text-xl text-gray-600">
          A brief overview of my education, work experience, and skills.
        </p>
      </div>

      {/* Resume Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-500">XYZ University, 2020 - Present</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">
              High School Diploma
            </h3>
            <p className="text-gray-500">ABC High School, 2017 - 2020</p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Work Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700">
              Frontend Developer Intern
            </h3>
            <p className="text-gray-500">Company Name | June 2023 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Developed responsive web applications using React and Tailwind
                CSS.
              </li>
              <li>
                Collaborated with designers to implement user-friendly
                interfaces.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">
              Web Development Intern
            </h3>
            <p className="text-gray-500">
              Another Company | Jan 2023 - May 2023
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Assisted in building and maintaining company websites.</li>
              <li>
                Participated in code reviews and contributed to team meetings.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:col-span-2">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">JavaScript</h3>
            </div>
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">React</h3>
            </div>
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">Node.js</h3>
            </div>
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">MongoDB</h3>
            </div>
            <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">Git & GitHub</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
