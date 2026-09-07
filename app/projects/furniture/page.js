import ProjectDetailPage from "../../components/ProjectDetailPage";
import first from "./sc/1.png";
import second from "./sc/2.png";
import third from "./sc/3.png";
import fourth from "./sc/4.png";
import fifth from "./sc/5.png";
import sixth from "./sc/6.png";
import seventh from "./sc/7.png";
import eighth from "./sc/8.png";

export const metadata = {
  title: "Furniture E-Commerce Platform | Neeraj Vishwakarma",
  description:
    "Engineering case study of a dual-application e-commerce platform built with Next.js, TypeScript, MongoDB ACID transactions, Redis SCAN cache invalidation, and Groq AI.",
};

export default function FurnitureProject() {
  return (
    <ProjectDetailPage
      title="Furniture E-Commerce Platform"
      category="ENGINEERING PROJECT"
      year="2025"
      subtitle="Dual-application platform featuring MongoDB ACID checkout transactions, atomic inventory updates, cursor-based Redis cache invalidation, and a catalog-grounded AI shopping assistant."
      description="Designed and built an end-to-end e-commerce platform with decoupled customer storefront and seller/admin applications. Emphasized transactional consistency, idempotent payment workflows, non-blocking cache synchronization, and natural-language product discovery."
      techStack={[
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Razorpay",
        "Groq AI",
        "Zod",
        "Tailwind CSS",
        "Zustand",
      ]}
      architectureHighlights={[
        {
          title: "Dual Application Architecture",
          description:
            "Architected decoupled customer and seller/admin portals with clean domain services, repository-based data access patterns, and strictly validated Zod API boundaries across both layers.",
        },
        {
          title: "Atomic Checkout & ACID Sessions",
          description:
            "Guaranteed zero inventory overselling using MongoDB multi-document ACID transactions with atomic bulkWrite stock decrements. Combined with idempotent Razorpay HMAC-SHA256 webhook processing to prevent double fulfillment.",
        },
        {
          title: "Distributed Redis Caching with SCAN",
          description:
            "Engineered an Upstash Redis caching layer with cursor-based, non-blocking SCAN invalidation, ensuring immediate catalog synchronization between seller updates and the customer storefront without server blocking.",
        },
        {
          title: "Catalog-Grounded AI Shopping Assistant",
          description:
            "Implemented natural-language search, fuzzy query matching, autocomplete, and a catalog-grounded Groq AI assistant that provides contextual furniture recommendations based strictly on available database inventory.",
        },
      ]}
      keyFeatures={[
        {
          title: "Storefront & Cart",
          description: "Responsive catalog browsing, dynamic price filtering, and cart state synchronized with server inventory.",
        },
        {
          title: "Atomic Checkout",
          description: "Server-side price verification, order generation, and Razorpay gateway integration.",
        },
        {
          title: "Seller & Admin Portal",
          description: "Role-based access control (RBAC) allowing sellers to manage their items and admins to supervise all orders.",
        },
        {
          title: "Idempotent Webhooks",
          description: "HMAC signature verification with transaction idempotency keys to handle duplicate or replayed payment events.",
        },
        {
          title: "AI Product Discovery",
          description: "Conversational assistant grounded in live product data to help shoppers match furniture to room dimensions.",
        },
        {
          title: "Optimized Media",
          description: "Cloudinary CDN image optimization pipeline for rapid thumbnail delivery across mobile and desktop.",
        },
      ]}
      engineeringChallenges={[
        {
          problem: "Preventing inventory race conditions during concurrent user checkout on low-stock items.",
          solution:
            "Wrapped the checkout pipeline inside MongoDB multi-document ACID transaction sessions, issuing conditional bulkWrite updates that fail fast if stock drops below requested quantity.",
        },
        {
          problem: "Stale product data on the storefront after seller inventory updates without blocking Redis with KEYS command.",
          solution:
            "Implemented a non-blocking cursor-based SCAN invalidation algorithm that chunks key sweeps in the background and flushes affected cache tags within milliseconds.",
        },
      ]}
      screenshots={[first, second, third, fourth, fifth, sixth, seventh, eighth]}
      liveUrl="https://furnitur.online"
      githubUrl="https://github.com/NeerajGithb/v-furniture-client"
    />
  );
}
