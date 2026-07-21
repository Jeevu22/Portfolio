"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "motion/react";


const TOTAL_FRAMES = 15;

function getFramePath(index: number) {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.333s.png`;
}

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  
  // Use scroll progress of the whole document or a specific container
  // The parent container in page.tsx is h-[500vh]. We track the scroll of that container.
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to TOTAL_FRAMES - 1)
  // Use lower friction for smoother scrolling experience
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const smoothFrameIndex = useSpring(frameIndex, { stiffness: 100, damping: 30, mass: 0.5 });

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          // Small delay before rendering to ensure state updates
          setTimeout(() => renderFrame(0, loadedImages), 100);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    if (!img || !img.complete) return;

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(smoothFrameIndex, "change", (latest) => {
    if (images.length === TOTAL_FRAMES) {
      const roundedIndex = Math.round(latest);
      // Use requestAnimationFrame to sync with display refresh
      requestAnimationFrame(() => {
        renderFrame(roundedIndex, images);
      });
    }
  });

  useEffect(() => {
    // Handle resize
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (images.length === TOTAL_FRAMES) {
          renderFrame(Math.round(frameIndex.get()), images);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // initial call
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" style={{ contain: 'layout style paint' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center" style={{ willChange: 'contents' }}>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,5,10,0.05)] via-[rgba(2,5,10,0.18)] to-[rgba(2,5,10,0.32)] z-[3]" />
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block w-full h-full object-cover z-[2]"
          style={{
            filter: 'brightness(0.80) contrast(1.08) saturate(0.95)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            transform: 'translateZ(0)',
          }}
        />
        {images.length < TOTAL_FRAMES && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 text-white"
          >
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-2xl font-light tracking-widest text-white/50" style={{ fontFamily: "var(--font-space)" }}>
              {progress}% <span className="text-sm">LOADED</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
