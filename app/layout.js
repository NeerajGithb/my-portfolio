import "./globals.css";
import Script from "next/script";
import ClientLayout from "./client-layout";

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
        {/* ✅ Auto Ads Script handled properly */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3077714211582326"
         crossOrigin="anonymous"></script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
