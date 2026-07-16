import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="para">
          <p>
            Hi, I'm Shivam — a Full-Stack Developer with a focus on AI-integrated 
            applications.
          </p>
          <br />
          <p>
            I like turning ideas into working products, not just prototypes. My 
            approach: understand the actual problem first, then pick the simplest 
            tech that solves it — whether that means a clean React frontend, a 
            FastAPI backend, or wiring in an LLM where it genuinely adds value.
          </p>
          <br />
          <p>
            I work across the stack — React/Next.js, Python, PostgreSQL — and I'm 
            comfortable moving between frontend polish and backend architecture 
            depending on what a project needs.
          </p>
          <br />
          <p>
            Outside of shipping code, I'm usually reading about how new AI tools 
            actually work under the hood, not just how to prompt them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
