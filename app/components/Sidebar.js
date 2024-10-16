import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className=" h-[30vh]  fixed top-28 lg:left-4 p-4">
      <ul className="flex  flex-col items-center space-y-10">
        <li>
          <Link
            href="https://github.com/NeerajGitCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-300 hover:scale-125 ">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/neeraj-vishwakarma-b87592281"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-300 hover:scale-125 ">
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/vish26087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-300 hover:scale-125 ">
            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
