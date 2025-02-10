// 🚀 Server-side layout (NO "use client")
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata = {
  title: "Neeraj Vishwakarma | Full-Stack Developer Portfolio",
  description:
    "Explore the projects, skills, and experiences of Neeraj Vishwakarma, a passionate full-stack developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
