import React from "react";
import Project from "./Project";
import WeatherApp from "../images/WeatherApp.GIF";
import BlogAPI from "../images/BlogAPI_.GIF";
import TaskTracker from "../images/TaskTracker.GIF";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Weather Dashboard",
              description: "Weather Dashboard App",
              imgSrc: WeatherApp,
              deployedLink:
                "https://jerrika.github.io/weather-dashboard/",
              githubLink:
                "https://github.com/Jerrika/weather-dashboardLinks",
            },
            {
              title: "Blog",
              description: "Web APIs",
              imgSrc: BlogAPI,
              deployedLink:
                "https://jerrika.github.io/blog/Links",
              githubLink:
                "https://github.com/Jerrika/blogLinks",
            },
            {
              title: "Taskboard Tracker",
              description: "Third Party API",
              imgSrc: TaskTracker,
              deployedLink:
                "https://jerrika.github.io/task-board",
              githubLink:
                "https://github.com/Jerrika/task-boardLinks to an external site.",
            },
            
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
