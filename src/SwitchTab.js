import { useState } from "react";
import "./styles.css";

function Home() {
  return <div>Welcome to Home</div>;
}

function Projects() {
  return <div>Welcome to Projects</div>;
}

function Blogs() {
  return <div>Welcome to Blogs</div>;
}

export default function SwitchTab() {
  let [isHome, setIsHome] = useState(false);
  let [isProject, setIsProject] = useState(false);
  let [isBlog, setIsBlog] = useState(false);

  function switchTab(e) {
    e.preventDefault();
    if (e.target.value === "home") {
      setIsHome(true);
      setIsProject(false);
      setIsBlog(false);
    } else if (e.target.value === "project") {
      setIsProject(true);
      setIsHome(false);
      setIsBlog(false);
    } else if (e.target.value === "blog") {
      setIsBlog(true);
      setIsHome(false);
      setIsProject(false);
    }
  }

  function DisplayDiv() {
    if (isHome) {
      return <Home />;
    } else if (isProject) {
      return <Projects />;
    } else if (isBlog) {
      return <Blogs />;
    }
    return "";
  }

  return (
    <div>
      <h2>Switch Tabs</h2>
      <ul
        style={{
          listStyle: "none",
          display: "inline-block"
        }}
      >
        <li
          style={{
            display: "inline"
          }}
        >
          <button value="home" onClick={switchTab}>
            Home
          </button>
        </li>
        <li
          style={{
            display: "inline"
          }}
        >
          <button value="project" onClick={switchTab}>
            Projects
          </button>
        </li>
        <li
          style={{
            display: "inline"
          }}
        >
          <button value="blog" onClick={switchTab}>
            Blogs
          </button>
        </li>
      </ul>
      <div>
        <DisplayDiv />
      </div>
    </div>
  );
}
