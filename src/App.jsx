import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [loading, setLoading] = useState(true);
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const activeSection = useScrollSpy(sections, 200);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Disable body scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  // Cursor glow effect
  useEffect(() => {
    if (loading) return;
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <IntroLoader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-[var(--color-background)] min-h-screen text-[var(--color-text-main)] font-outfit overflow-x-hidden transition-colors duration-500"
        >
          {/* Cursor glow */}
          <div id="cursor-glow" />
          <Background />

          <Navbar activeSection={activeSection} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
