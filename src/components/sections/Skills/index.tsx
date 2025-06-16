import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.scss';

const skills = [
  { key: 'HTML', percent: 90 },
  { key: 'CSS', percent: 85 },
  { key: 'JavaScript', percent: 90 },
  { key: 'React', percent: 85 },
  { key: 'TypeScript', percent: 80 },
];

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="skills-section" data-animate ref={ref}>
        <div className="skill-container">
            <h2>{t('skills.title')}</h2>
            <div className="skills-list">
                {skills.map(skill => (
                <div className="skill-item" key={skill.key}>
                    <span>{skill.key}</span>
                    <div className="progress-bar">
                    <div className="progress" style={{ width: skill.percent + '%' }} />
                    </div>
                    <span className="percent">{skill.percent}%</span>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};
export default Skills;
