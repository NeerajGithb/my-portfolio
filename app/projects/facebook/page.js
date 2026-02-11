import ProjectDetailPage from "../../components/ProjectDetailPage";
import first from "./sc/1.png";
import second from "./sc/2.png";
import third from "./sc/3.png";
import fourth from "./sc/4.png";
import fifth from "./sc/5.png";
import sixth from "./sc/6.png";
import seventh from "./sc/7.png";
import eighth from "./sc/8.png";

export default function FacebookProject() {
  return (
    <ProjectDetailPage
      title="Facebook Clone"
      emoji="📘"
      description="A fully functional Facebook clone built using Next.js, MongoDB, and Cloudinary. This project closely mimics the real Facebook app, providing an in-depth learning experience in full-stack development."
      techStack={[
        "Next.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
        "Node.js & Express.js",
        "JWT Authentication",
      ]}
      features={[
        "Post creation with image & video uploads",
        "Like, comment & share functionality",
        "User authentication & profile management",
        "Real-time updates",
        "Friend requests & connections",
        "Dark mode support",
      ]}
      learnings={[
        "Advanced Next.js for full-stack development",
        "Efficient database management with MongoDB",
        "Cloudinary for handling media storage",
        "Implementing JWT-based authentication",
        "Optimizing API performance",
      ]}
      screenshots={[first, second, third, fourth, fifth, sixth, seventh, eighth]}
      liveUrl="https://facebook-n.vercel.app"
      githubUrl="https://github.com/NeerajGithb/facebook"
    />
  );
}