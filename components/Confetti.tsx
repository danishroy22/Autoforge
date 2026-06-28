"use client";

import { useEffect, useRef } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
}

const COLORS = [
  "#0066ff",
  "#00d4ff",
  "#a855f7",
  "#ffffff",
  "#ffd700",
  "#ff6b6b",
];

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let pieces: ConfettiPiece[] = [];
    let frame = 0;
    const maxFrames = 420;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = () => {
      pieces = Array.from({ length: 160 }, () => ({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        size: Math.random() * 8 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        velocityX: (Math.random() - 0.5) * 3,
        velocityY: Math.random() * 3 + 2,
        opacity: 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      pieces.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();

        p.x += p.velocityX;
        p.y += p.velocityY;
        p.rotation += p.rotationSpeed;
        p.velocityY += 0.04;

        if (frame > maxFrames * 0.6) {
          p.opacity = Math.max(0, p.opacity - 0.008);
        }
      });

      if (frame < maxFrames) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    spawn();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      aria-hidden="true"
    />
  );
}
