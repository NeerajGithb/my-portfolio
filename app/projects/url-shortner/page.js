import ProjectDetailPage from "../../components/ProjectDetailPage";

export default function UrlShortnerProject() {
  return (
    <ProjectDetailPage
      title="URL Shortener"
      emoji="🔗"
      description="A simple URL shortener built with Next.js, React, and Tailwind CSS using local storage for link management."
      techStack={["Next.js", "React", "Tailwind CSS", "Local Storage"]}
      features={[
        "Shorten long URLs",
        "Copy shortened links",
        "View all shortened URLs",
        "Local storage persistence",
        "Clean and modern UI",
      ]}
      learnings={[
        "Next.js application development",
        "State management in React",
        "Local storage API",
        "Tailwind CSS styling",
      ]}
      screenshots={[]}
      liveUrl="https://quick-n.vercel.app"
      githubUrl="https://github.com/NeerajGithb/url-shortener"
    />
  );
}
