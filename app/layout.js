import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Neeraj Vishwakarma | Full-Stack Developer",
  description:
    "Full-Stack Developer building AI-powered products across the stack, from API design and backend systems to LLM orchestration and cloud infrastructure.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-950 focus:text-white focus:rounded-sm shadow-xl text-sm font-medium"
        >
          Skip to content
        </a>
        
        <ClientWrapper>
          <Navbar />
          <main id="main-content" className="pt-16">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}

