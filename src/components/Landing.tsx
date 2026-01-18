import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              Ritik
              
               <span> Soni</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>Java Backend / Full Stack Developer</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Spring Boot</div>
              <div className="landing-h2-2">REST APIs</div>
            </h2>

            <h2>
              <div className="landing-h2-info">Scalable Web Applications</div>
              <div className="landing-h2-info-1">Secure Backend Systems</div>
            </h2>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;