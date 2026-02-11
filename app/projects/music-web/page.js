import ProjectDetailPage from "../../components/ProjectDetailPage";
import first from "./sc/1.png";
import second from "./sc/2.png";
import third from "./sc/3.png";

export default function MusicProject() {
  return (
    <ProjectDetailPage
      title="Music Streaming App"
      emoji="🎵"
      description="A lightweight music player with a clean UI & responsive design."
      techStack={["HTML", "CSS", "JavaScript"]}
      features={[
        "Play & pause songs smoothly",
        "Fully responsive for all devices",
        "Beautiful UI with custom animations",
        "Custom audio controls",
        "Seek functionality",
      ]}
      learnings={[
        "Building a music player in JavaScript",
        "Mastered responsive web design",
        "Improved CSS animations & interactivity",
        "Handling JavaScript event listeners for media elements",
      ]}
      screenshots={[first, second, third]}
      liveUrl="https://music-n.vercel.app"
      githubUrl="https://github.com/NeerajGithb/Music-Web"
    />
  );
}
