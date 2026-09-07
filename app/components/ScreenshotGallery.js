"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ScreenshotGallery({ items = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    },
    [items.length]
  );

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    },
    [items.length]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  if (!items || items.length === 0) return null;

  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group bg-white rounded-sm border border-neutral-200 hover:border-neutral-400 overflow-hidden cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md flex flex-col"
          >
            {/* Screenshot Thumbnail Frame - Zero Clipping */}
            <div className="relative w-full bg-neutral-100 border-b border-neutral-200 overflow-hidden flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.title || `Screenshot ${index + 1}`}
                className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-neutral-900/90 text-white px-3 py-1 rounded shadow-sm flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-1.5 bg-white">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h4>
                {item.tag && (
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200 rounded">
                    {item.tag}
                  </span>
                )}
              </div>
              {item.caption && (
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Expanded High-Resolution Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          {/* Top Bar Controls */}
          <div
            className="w-full max-w-6xl flex items-center justify-between pb-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 bg-white/10 rounded border border-white/20">
                {selectedIndex + 1} / {items.length}
              </span>
              <span className="text-sm font-semibold truncate">
                {currentItem.title}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-colors text-xs font-mono flex items-center gap-1"
              aria-label="Close lightbox"
            >
              <span>ESC</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Center Image Container */}
          <div
            className="relative w-full max-w-6xl h-[72vh] sm:h-[78vh] bg-neutral-900 rounded-sm border border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.title || "Expanded preview"}
              fill
              style={{ objectFit: "contain" }}
              priority
            />

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-white rounded-full border border-neutral-700 shadow-md transition-all"
                  aria-label="Previous screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-white rounded-full border border-neutral-700 shadow-md transition-all"
                  aria-label="Next screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Bottom Caption Bar */}
          {currentItem.caption && (
            <div
              className="w-full max-w-6xl pt-3 text-center text-xs text-neutral-300"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.caption}
            </div>
          )}
        </div>
      )}
    </>
  );
}
