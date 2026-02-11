import ProjectDetailPage from "../../components/ProjectDetailPage";

export default function PortfolioProject() {
  return (
    <ProjectDetailPage
      title="Portfolio Website"
      emoji="🌐"
      description="A premium and responsive portfolio website to showcase my skills, achievements, and previous work with a professional design."
      techStack={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
      features={[
        "Responsive design across all devices",
        "Project showcase with details",
        "Skills and experience sections",
        "Contact information",
        "Modern and clean UI",
      ]}
      learnings={[
        "Building portfolio websites",
        "Next.js best practices",
        "Responsive design principles",
        "Professional UI/UX design",
      ]}
      screenshots={[]}
      liveUrl="/"
      githubUrl="https://github.com/NeerajGithb/my-portfolio"
    />
  );
}
