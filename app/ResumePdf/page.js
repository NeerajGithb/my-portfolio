import React from "react";
import { Document, Page, Text, View, StyleSheet, Link, pdf } from "@react-pdf/renderer";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 24,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 16,
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    color: "#1D4ED8", // Tailwind blue-700
    fontWeight: "600",
    fontSize: 12,
    textDecoration: "none",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 24,
  },
  socialLink: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 6,
    borderRadius: 50,
    width: 80,
    textAlign: "center",
  },
  skillsContainer: {
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  projectContainer: {
    marginTop: 20,
  },
  education: {
    fontSize: 14,
    color: "#374151", // Tailwind gray-700
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  projectTechStack: {
    fontSize: 12,
    color: "#1D4ED8", // Tailwind blue-700
  },
  listItem: {
    fontSize: 12,
    marginBottom: 4,
  },
});

const SocialLink = ({ icon, borderColor, bgColor, href }) => (
  <View style={[styles.socialLink, { borderColor: borderColor, backgroundColor: bgColor }]} >
    <FontAwesomeIcon icon={icon} color="white" />
  </View>
);

const SkillItem = ({ title, skills }) => (
  <View style={{ marginBottom: 10 }}>
    <Text style={{ fontWeight: "bold" }}>{title}:</Text>
    <Text style={{ fontSize: 12 }}>{skills}</Text>
  </View>
);

const ProjectItem = ({ name, techStack, description, learned }) => (
  <View style={styles.projectContainer}>
    <Text style={styles.projectTitle}>{name}</Text>
    <Text style={styles.projectTechStack}>{techStack}</Text>
    {description.map((line, idx) => (
      <Text key={idx} style={styles.listItem}>{line}</Text>
    ))}
    <Text style={styles.listItem}><i>Learned: {learned}</i></Text>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.skillsTitle}>{title}</Text>
    {children}
  </View>
);

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Neeraj Vishwakarma</Text>
      </View>

      {/* Contact */}
      <View style={styles.contact}>
        <Link src="mailto:neerajvishwakarma6484@gmail.com">
          neerajvishwakarma6484@gmail.com
        </Link>
        <Text>|</Text>
        <Link src="tel:+918287168307">
          +91 8287168307
        </Link>
      </View>

      {/* Social Links */}
      <View style={styles.socialLinks}>
        <SocialLink
          href="https://www.linkedin.com/in/neeraj-vishwakarma-b87592281"
          icon={faLinkedin}
          borderColor="#1D4ED8"
          bgColor="#1D4ED8"
        />
        <SocialLink
          href="https://github.com/NeerajGithb"
          icon={faGithub}
          borderColor="black"
          bgColor="black"
        />
      </View>

      {/* Skills Section */}
      <Section title="Skills">
        <SkillItem title="Language" skills="C++, JavaScript" />
        <SkillItem title="Frontend" skills="Next.js, React.js, HTML, CSS, Tailwind CSS" />
        <SkillItem title="Backend" skills="Node.js, Express.js" />
        <SkillItem title="Database" skills="MongoDB" />
        <SkillItem title="Development Tools" skills="Git, GitHub" />
        <SkillItem title="API & Security" skills="REST APIs, JWT Authentication" />
        <SkillItem title="Computer Science" skills="DSA (Basic), OOPs" />
      </Section>

      {/* Projects Section */}
      <Section title="Projects">
        <ProjectItem
          name="URL Shortener"
          techStack="Next.js, React, Node.js, MongoDB, Tailwind CSS"
          description={[
            "Full-stack app for shortening and managing URLs.",
            "Users can generate short links and retrieve original URLs.",
            "Uses local storage and API calls for seamless state management.",
          ]}
          learned="Efficient API handling and state management in a full-stack environment."
        />
        <ProjectItem
          name="Facebook Clone"
          techStack="Next.js, MongoDB, Cloudinary, Tailwind CSS, Node.js, Express.js, JWT"
          description={[
            "Full-stack social media platform where users can create posts, like, comment, and share.",
            "Secure JWT authentication for user login and session management.",
            "Uses Cloudinary for efficient media storage and handling.",
            "Real-time updates and interactive UI enhance user experience.",
          ]}
          learned="Implementing authentication and managing user sessions securely."
        />
        <ProjectItem
          name="Music Streaming App"
          techStack="HTML, CSS, JavaScript"
          description={[
            "Music player with play, pause, seek, and custom audio controls.",
            "Features a fully responsive design for smooth playback across devices.",
            "Optimized UI/UX for an intuitive and engaging user experience.",
          ]}
          learned="Handling JavaScript event listeners for interactive media elements."
        />
        <ProjectItem
          name="Twitter & Netflix Clones"
          techStack="HTML, CSS, JavaScript"
          description={[
            "Frontend clones of Twitter & Netflix with replicated UI and interactions.",
            "Features a fully responsive design with animations and hover effects.",
            "Utilizes CSS Grid, Flexbox, and transitions for a pixel-perfect layout.",
          ]}
          learned="Advanced CSS techniques for achieving modern UI designs."
        />
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <View style={styles.education}>
          <Text>
            <span style={{ fontWeight: "bold", color: "#1D4ED8" }}>
              Bachelor of Computer Applications (BCA)
            </span>
          </Text>
          <Text>
            Institute of Professional Excellence & Management (IPEM College), Ghaziabad, Uttar Pradesh
          </Text>
        </View>
      </Section>
    </Page>
  </Document>
);

const DownloadResume = () => {
  const generatePdf = () => {
    pdf(<ResumePDF />)
      .toBlob()
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.pdf"; // Set the filename for the download
        link.click();
      });
  };

  return (
    <button onClick={generatePdf}>Download Resume</button>
  );
};

export default DownloadResume;
