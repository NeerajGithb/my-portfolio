import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Head from "next/head"; // Import the Head component

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body>
        <Navbar />
        <Navbar2 />
        <main>{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
