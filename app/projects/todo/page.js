import ProjectDetailPage from "../../components/ProjectDetailPage";

export default function TodoProject() {
  return (
    <ProjectDetailPage
      title="Todo App"
      emoji="✅"
      description="A clean and functional todo application with modern UI for task management."
      techStack={["HTML", "CSS", "JavaScript"]}
      features={[
        "Add and delete tasks",
        "Mark tasks as complete",
        "Clean and intuitive UI",
        "Responsive design",
        "Local storage persistence",
      ]}
      learnings={[
        "DOM manipulation in JavaScript",
        "Local storage usage",
        "Event handling",
        "State management basics",
      ]}
      screenshots={[]}
      liveUrl="https://todo-n.vercel.app"
      githubUrl="https://github.com/NeerajGithb/todo"
    />
  );
}
