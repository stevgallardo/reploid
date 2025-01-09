'use client';

import { useEffect, useRef } from 'react';

export function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; dx: number; dy: number }[] = [];

    // Fewer particles
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
      const horizontalMovement = Math.random() < 0.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: horizontalMovement ? (Math.random() - 0.5) * 0.5 : 0,
        dy: horizontalMovement ? 0 : (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      if (!ctx) return;

      // Create a fading trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight opacity to create trail
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(20, 184, 166, 0.5)'; // Transparent teal color for particles
      particles.forEach((particle) => {
        ctx.beginPath();
        // Draw square particles
        ctx.fillRect(particle.x, particle.y, 4, 4);

        // Move particles
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > height) particle.dy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10"
      style={{ position: 'fixed', width: '100%', height: '100%' }}
    />
  );
}
