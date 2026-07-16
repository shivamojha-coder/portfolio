import React from "react";
import "./styles/SkillsMarquee.css";
import { FaCss3Alt, FaJava } from "react-icons/fa6";
import { 
  SiJavascript, SiTypescript, SiC, SiCplusplus, SiPython, SiMysql, SiPhp,
  SiFramer, SiVite, SiGit, SiGithub, SiFigma, SiFirebase, SiMongodb, SiExpress,
  SiBootstrap, SiJquery, SiGitlab, SiDocker, SiNetlify, SiVercel, SiNextdotjs
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

const row1: SkillItem[] = [
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "C", icon: <SiC color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "SQL", icon: <SiMysql color="#4479A1" /> },
  { name: "PHP", icon: <SiPhp color="#777BB4" /> },
];

const row2: SkillItem[] = [
  { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Express", icon: <SiExpress color="#ffffff" /> },
];

const row3: SkillItem[] = [
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  { name: "GitLab", icon: <SiGitlab color="#FCA121" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
];

const SkillRow = ({ items, direction }: { items: SkillItem[]; direction: "left" | "right" }) => (
  <div className="marquee-row">
    <div className={`marquee-track ${direction === "right" ? "marquee-reverse" : ""}`}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="skill-pill">
          {item.icon} {item.name}
        </span>
      ))}
    </div>
  </div>
);

const TechStack = () => (
  <div className="skills-section" style={{ position: "relative", zIndex: 20, background: "var(--backgroundColor)" }}>
    <h2 className="skills-title">SKILLS</h2>
    <SkillRow items={row1} direction="left" />
    <SkillRow items={row2} direction="right" />
    <SkillRow items={row3} direction="left" />
  </div>
);

export default TechStack;
