import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, Terminal } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="orb orb-green w-[500px] h-[500px] -right-20 top-1/4 opacity-25" />
      <div className="orb orb-purple w-[350px] h-[350px] left-0 bottom-1/4 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Professional Path</div>
          <h2 className="font-bebas text-[var(--color-text-main)] leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Work <span className="text-[var(--color-primary)]">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/05 transform md:-translate-x-1/2 hidden sm:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent"
            />
          </div>

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -45 : 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 90, damping: 18, delay: idx * 0.15 }}
                className={`relative flex flex-col items-start gap-4 sm:gap-8 pl-6 sm:pl-0 md:flex-row md:items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, damping: 10, delay: idx * 0.15 + 0.3 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] neon-border transform -translate-x-1/2 top-0 mt-6 sm:mt-8 hidden sm:block z-20"
                />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <motion.div
                    whileHover={{ y: -5, borderColor: 'rgba(57,255,20,0.35)', boxShadow: '0 12px 30px rgba(57,255,20,0.06)' }}
                    className="glass-card p-5 sm:p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 group w-full"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2">
                          <Building2 size={16} />
                          <span className="font-fira text-sm uppercase tracking-wider">{item.company}</span>
                        </div>
                        <h3 className="font-outfit font-bold text-2xl text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                          {item.role}
                        </h3>
                      </div>
                      <div className="px-3 py-1 rounded bg-[var(--color-primary)]/08 border border-[var(--color-primary)]/20 text-[var(--color-primary)] font-fira text-xs shrink-0">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[#555] font-fira text-xs mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={12} />
                        Internship
                      </div>
                    </div>

                    <p className="font-outfit text-[var(--color-text-muted)] text-sm leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] font-fira text-[10px] uppercase group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]/60 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Vertical Decorative Element for Mobile */}
                <div className="sm:hidden w-full h-px bg-white/05 my-4" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
