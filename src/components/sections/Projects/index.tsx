import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true }) as Array<any>;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("is-visible");
      } else {
        el.classList.remove("is-visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="projects-section" data-animate ref={ref}>
      <div className="projects-container">
      <h2>{t("projects.heading")}</h2>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            {p.img && (
              <img src={p.img} alt={p.name} className="project-img" />
            )}
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {t("projects.link")}
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
export default Projects;
