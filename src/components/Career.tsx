import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

                    {/* EDUCATION (OPTIONAL BUT NICE) */}
                    <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Computer Science</h5>
              </div>
              <h3>2020 – 2023</h3>
            </div>
            <p>
              Completed B.Tech in Computer Science with a strong foundation in
              Object-Oriented Programming, Data Structures, Databases, and
              Software Engineering principles.
            </p>
          </div>

          {/* CURRENT ROLE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Scriza Pvt. Ltd.</h5>
              </div>
              <h3>MAR 2024 – PRESENT</h3>
            </div>
            <p>
              Working as a Full Stack Developer with a strong focus on backend
              development using Java and Spring Boot. Responsible for designing
              and developing RESTful APIs, implementing authentication and
              authorization, managing databases, and optimizing application
              performance.
              <br /><br />
              Contributed to building real-world business applications such as
              School ERP systems, admin panels, and multi-role platforms.
              Actively involved in debugging production issues, improving system
              stability, and supporting CI/CD-based deployments on Linux servers.
            </p>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Career;