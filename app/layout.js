import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Neeraj Vishwakarma | Full-Stack Developer Portfolio",
  description:
    "Explore the projects, skills, and experiences of Neeraj Vishwakarma, a passionate full-stack developer.",
  icons: {
    icon: "/favicon.ico", // Add your favicon path here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
