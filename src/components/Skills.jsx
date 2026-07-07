import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Skill proficiency levels (%)
const SKILL_LEVELS = {
  'JavaScript': 90,
  'Python': 65,
  'HTML5': 95,
  'CSS3': 88,
  'React.js': 92,
  'React Router': 85,
  'Tailwind CSS': 88,
  'Git': 80,
  'GitHub': 82,
  'VS Code': 90,
  'Chrome DevTools': 78,
  'Responsive Design': 90,
  'REST API Integration': 80,
  'Firebase Auth': 70,
  'UI/UX Fundamentals': 75,
  'Next.js': 88,
};

const TECH_LOGOS = [
  { name: 'React', emoji: '⚛️' },
  { name: 'JavaScript', emoji: '🟨' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'HTML5', emoji: '🟧' },
  { name: 'CSS3', emoji: '🔵' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Git', emoji: '🔀' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Tailwind', emoji: '💨' },
  { name: 'Vite', emoji: '⚡' },
      { name: 'Next.js', emoji: '⏭️' },
  { name: 'Firebase', emoji: '🔥' },
  { name: 'Figma', emoji: '🎨' },
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="group mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-outfit text-sm text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-fira text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors"
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-track relative w-full">
        <motion.div
          className="skill-bar-fill relative flex items-center"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          {/* Glowing dot tracker */}
          <div className="absolute right-0 translate-x-1/2 w-3 h-3 bg-[var(--color-background)] rounded-full border-2 border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary-glow)] group-hover:scale-125 transition-transform duration-300" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Languages', icon: '{ }', skills: skills.languages },
    { title: 'Frameworks & Libraries', icon: '⚛', skills: skills.frameworks },
    { title: 'Tools & Platforms', icon: '🛠', skills: skills.tools },
    { title: 'Other Expertise', icon: '✦', skills: skills.other },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[var(--color-surface)] transition-colors duration-500" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="orb orb-blue w-[500px] h-[500px] -left-40 top-1/3 opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Technical Arsenal</div>
          <h2 className="font-bebas text-[var(--color-text-main)] leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Skills & <span className="text-[var(--color-primary)]">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-12 mb-14 sm:mb-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 18, delay: ci * 0.08 }}
              whileHover={{ y: -6, borderColor: 'var(--color-primary-glow)', boxShadow: '0 12px 30px var(--color-primary-subtle)' }}
              className="glass-card rounded-2xl p-7 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-outfit font-bold text-[var(--color-text-main)] text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill} level={SKILL_LEVELS[skill] ?? 75} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech ticker strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mb-6 justify-center">Also Comfortable With</div>
          <div className="relative overflow-hidden border border-[var(--color-border)] rounded-2xl bg-[var(--color-surface-2)] py-5 transition-colors duration-500">
            <div className="flex gap-8 animate-ticker whitespace-nowrap">
              {[...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shrink-0 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/05 transition-all cursor-pointer group select-none"
                >
                  <span className="text-lg">{t.emoji}</span>
                  <span className="font-outfit text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
