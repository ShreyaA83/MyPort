"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const sigma = 10;
const beta = 8 / 3;
const rho = 28;
let dt = 0.01;

function lorenz([x, y, z]: number[], dt: number): number[] {
  const dx = sigma * (y - x) * dt;
  const dy = (x * (rho - z) - y) * dt;
  const dz = (x * y - beta * z) * dt;
  return [x + dx, y + dy, z + dz];
}

export default function LorenzAttractor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pathPoints = useRef<number[][]>([]);
  const pointLimit = 1500;
  const [rotation, setRotation] = useState({ x: 150, y: 40 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const offscreenCanvas = offscreenCanvasRef.current;
    
    if (!canvas || !offscreenCanvas) return; 

    const ctx = canvas.getContext('2d');
    const offscreenCtx = offscreenCanvas.getContext('2d');

    if (!ctx || !offscreenCtx) return;

    const { width, height } = canvas;
    let pos: number[] = [Math.random() * 0.01, Math.random() * 0.01, Math.random() * 0.01];
    let animationFrameId: number;

    const drawAttractor = () => {
      offscreenCtx.clearRect(0, 0, width, height); 

      dt = 0.01 + (Math.random() - 0.5) * 0.002;

      for (let i = 0; i < 0.5; i++) {
        pos = lorenz(pos, dt);
        pos = pos.map((p) => p + (Math.random() - 0.5) * 0.01);
        pathPoints.current.push([...pos]);
      }

      if (pathPoints.current.length > pointLimit) {
        pathPoints.current.splice(0, pathPoints.current.length - pointLimit);
      }

      offscreenCtx.beginPath();
      offscreenCtx.moveTo(
        pathPoints.current[0][0] * 10 + width / 2,
        pathPoints.current[0][1] * 10 + height / 2
      );

      for (let i = 1; i < pathPoints.current.length; i++) {
        offscreenCtx.lineTo(
          pathPoints.current[i][0] * 10 + width / 2,
          pathPoints.current[i][1] * 10 + height / 2
        );
        offscreenCtx.strokeStyle = `hsl(${183 + (i / pointLimit) * 120}, 89%, 89%)`;
      }

      offscreenCtx.lineWidth = 1;
      offscreenCtx.shadowBlur = 15;
      offscreenCtx.shadowColor = 'rgba(202, 255, 243, 0.8)';
      offscreenCtx.stroke();

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(offscreenCanvas, 0, 0);

      animationFrameId = requestAnimationFrame(drawAttractor);
    };

    drawAttractor();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    setRotation({
      x: (mouseY - canvas.height / 2) / 8,
      y: (mouseX - canvas.width / 2) / 8,
    });
  }, []);

  return (
    <motion.div
      style={{
        width: '600px',
        height: '600px',
        perspective: '2000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseMove={handleMouseMove}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: 'spring', stiffness: 70, damping: 35 }}
    >
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <canvas
        ref={offscreenCanvasRef}
        width={600}
        height={600}
        style={{ display: 'none' }} 
      />
    </motion.div>
  );
}
