import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img classNaame="avatar" src="Yusuf-img-1.jpg" alt="Yusuf-Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Lawal Owolabi Yusuf</h1>
      {/* <span className="title">
        Software Engineer | Backend Developer| PHP| Laravel | Codeigniter |
        Python | React | AWS
      </span> */}
      <article>
        I’m a highly adaptable and self-driven software engineer with a passion
        for technology and people. My expertise spans backend development, cloud
        infrastructure, and frontend integration. I handle the full development
        cycle from local environments to production and am always eager to
        learn, grow, and contribute to building scalable, efficient solutions.
        <a href="https://www.linkedin.com/in/lawal-owolabi-yusuf-04976b143">
          Connect with me on LinkedIn
        </a>
      </article>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skills skill="HTML+CSS" emoji="💪" color="orange" />
      <Skills skill="Javascript" emoji="💪" color="yellow" />
      <Skills skill="React" emoji="💪" color="cyan" />
      <Skills skill="PHP" emoji="💪" color="purple" />
      <Skills skill="Laravel" emoji="💪" color="red" />
      <Skills skill="Codeigniter" emoji="💪" color="darkred" />
      <Skills skill="Python" emoji="💪" color="blue" />
      <Skills skill="Git/Gitlab and Github" emoji="💪" color="black" />
      <Skills skill="Docker" emoji="💪" color="lightblue" />
      <Skills skill="AWS" emoji="💪" color="orange" />
      <Skills skill="Terraform" emoji="💪" color="purple" />
    </div>
  );
}

function Skills(props) {
  const style = { backgroundColor: props.color };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
