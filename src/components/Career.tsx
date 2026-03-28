import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>10th Standard</h5>
              </div>
              <h3>Foundation</h3>
            </div>
            <p>
              Completed my 10th standard with a strong focus on academics. This early stage sparked my analytical thinking and clearly paved the way for my continued journey into technology and computer science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>Technical Education</h5>
              </div>
              <h3>Graduated</h3>
            </div>
            <p>
              Successfully completed my Diploma in Computer Science. During this time, I gained practical hands-on experience in programming, software development, and core computer systems, laying a strong technical groundwork.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>2nd Year (Lateral Entry)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently in the 2nd year of my B.Tech degree, specializing in Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning. I am actively expanding my skill set in modern web development and advanced AI technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
