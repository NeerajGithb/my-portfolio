import ProjectDetailPage from "../../components/ProjectDetailPage";
import first from "./sc/1.png";
import second from "./sc/2.png";
import third from "./sc/3.png";
import fourth from "./sc/4.png";
import fifth from "./sc/5.png";
import sixth from "./sc/6.png";
import seventh from "./sc/7.png";
import eighth from "./sc/8.png";

export default function FurnitureProject() {
    return (
        <ProjectDetailPage
            title="Furniture E-Commerce Website"
            emoji="🛋️"
            description="A production-ready e-commerce platform using Next.js, Node.js, and MongoDB with secure authentication, Razorpay payments, and scalable API architecture. Built from Apr 2025 to Present."
            techStack={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Mongoose",
                "Razorpay",
                "Cloudinary",
                "JWT Authentication",
                "Vercel"
            ]}
            features={[
                "Dynamic product catalog with search & filtering",
                "JWT-based authentication & protected routes",
                "Cart, checkout & Razorpay payment integration",
                "Webhook verification for payment security",
                "Order management & status tracking",
                "Cloudinary image optimization",
                "Fully responsive UI across all devices",
                "Scalable API architecture"
            ]}
            learnings={[
                "Building production-ready e-commerce platforms",
                "Implementing secure payment gateways with Razorpay",
                "Advanced JWT authentication & authorization",
                "Payment webhook verification & security",
                "Database schema design for e-commerce",
                "Image optimization with Cloudinary",
                "Scalable API architecture patterns"
            ]}
            screenshots={[first, second, third, fourth, fifth, sixth, seventh, eighth]}
            liveUrl="https://your-furniture-site.vercel.app"
            githubUrl="https://github.com/NeerajGithb/furniture-ecommerce"
        />
    );
}
