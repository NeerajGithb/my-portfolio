"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, Button } from "./UI";

/**
 * Reusable Project Detail Page Component
 * Professional, production-quality design
 */
export default function ProjectDetailPage({
    title,
    emoji,
    description,
    techStack,
    features,
    learnings,
    screenshots,
    liveUrl,
    githubUrl
}) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                        {emoji} {title}
                    </h1>
                    <p className="text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="p-6">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                            Tech Stack
                        </h2>
                        <ul className="space-y-2 text-sm text-neutral-700">
                            {techStack.map((tech, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                            Features
                        </h2>
                        <ul className="space-y-2 text-sm text-neutral-700">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                            Learnings
                        </h2>
                        <ul className="space-y-2 text-sm text-neutral-700">
                            {learnings.map((learning, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    {learning}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                {/* Screenshots */}
                {screenshots && screenshots.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                            Screenshots
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video bg-neutral-100 rounded-sm overflow-hidden cursor-pointer border border-neutral-200 hover:border-neutral-400 transition-colors"
                                    onClick={() => setSelectedImage(screenshot)}
                                >
                                    <Image
                                        src={screenshot}
                                        alt={`Screenshot ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {liveUrl && (
                        <Button href={liveUrl} variant="primary" className="min-w-[140px]">
                            View Live Demo
                        </Button>
                    )}
                    {githubUrl && (
                        <Button href={githubUrl} variant="secondary" className="min-w-[140px]">
                            View on GitHub
                        </Button>
                    )}
                </div>
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full">
                        <button
                            className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                width={1200}
                                height={800}
                                style={{ objectFit: "contain" }}
                                className="rounded-sm"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
