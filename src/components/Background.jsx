import React, { useEffect, useRef } from 'react';

// A lightweight canvas background with floating geometric shapes.
// Features custom colors from our palette and interactive mouse avoidance physics.

const Shape = (ctx, size, color) => {
  const points = [];
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3;
    points.push({
      x: Math.cos(angle) * size,
      y: Math.sin(angle) * size,
    });
  }
  return { points, color, size };
};

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const shapes = [];
    const shapeCount = 18;

    const colors = [
      'rgba(57, 255, 20, 0.08)',   // Neon Green
      'rgba(0, 198, 255, 0.07)',   // Electric Blue
      'rgba(191, 90, 242, 0.06)',  // Vibrant Purple
    ];

    for (let i = 0; i < shapeCount; i++) {
      const size = Math.random() * 25 + 15;
      const color = colors[i % colors.length];
      const shape = Shape(ctx, size, color);
      shape.x = Math.random() * width;
      shape.y = Math.random() * height;
      shape.vx = (Math.random() - 0.5) * 0.35;
      shape.vy = (Math.random() - 0.5) * 0.35;
      shape.rotation = Math.random() * Math.PI * 2;
      shape.rotationSpeed = (Math.random() - 0.5) * 0.008;
      shapes.push(shape);
    }

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      shapes.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.beginPath();
        ctx.moveTo(s.points[0].x, s.points[0].y);
        ctx.lineTo(s.points[1].x, s.points[1].y);
        ctx.lineTo(s.points[2].x, s.points[2].y);
        ctx.closePath();
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.restore();

        // move base speed
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;

        // mouse repulsion
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 240;
        if (dist < radius) {
          const force = (radius - dist) / radius;
          // smooth deceleration / push
          s.x -= (dx / dist) * force * 1.2;
          s.y -= (dy / dist) * force * 1.2;
        }

        // wrap edges
        if (s.x < -s.size) s.x = width + s.size;
        if (s.x > width + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = height + s.size;
        if (s.y > height + s.size) s.y = -s.size;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default Background;
