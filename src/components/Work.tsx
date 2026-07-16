import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    name: "Tutor Quest",
    category: "Localized Learning Platform",
    tools: "React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Supabase (PostgreSQL), RLS",
    image: "/images/tutor_quest.png",
    link: "https://tutor-quest-hub.vercel.app/"
  },
  {
    name: "FeedSense",
    category: "AI-Powered Feedback Platform",
    tools: "React 18, TypeScript, Tailwind, Custom GRU Engine, Supabase",
    image: "/images/feedsense.png",
    link: "https://feedsense.vercel.app/"
  },
  {
    name: "Student Performance Predictor",
    category: "AI/ML App",
    tools: "HTML, CSS, JS, Tailwind, Three.js, Flask, SQL",
    image: "/images/student_performance.png",
    link: "https://student-performance-prediction-rho.vercel.app/"
  }
];

const Work = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = container.current?.querySelectorAll(".work-box") as NodeListOf<HTMLElement>;
        const workContainer = container.current?.querySelector(".work-container");
        
        if (!box || box.length === 0 || !workContainer) return;
        
        const rectLeft = workContainer.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
        
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${translateX}`, // Use actual scroll width
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      const workFlex = container.current?.querySelector(".work-flex");
      if (workFlex) {
        timeline.to(workFlex, {
          x: -Math.max(translateX, 0), // prevent NaN or negative weirdness 
          ease: "none",
        });
      }
    }, container);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div ref={container} className="work-section" id="work" style={{ backgroundColor: "var(--backgroundColor)", zIndex: 20, position: "relative" }}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.link && (
                  <div style={{ marginTop: "1rem" }}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color: "var(--accentColor)", textDecoration: "underline", fontSize: "1rem", fontWeight: "bold" }}
                    >
                      View Live Project ↗
                    </a>
                  </div>
                )}
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
