import React from "react";
import Project from "../Project";
import "./projects.scss";
import { projects } from "../../constants";

// const projects: {
//   name: string;
//   discription: string;
//   stack: string[];
//   link: string;
//   git: string;
//   img: string;
// }[] = [
//   {
//     name: "clothing store",
//     discription:
//       "Full Stack online store build using Next.js for frontend and Strapi for backend. User is also able to login using his/her gmail account and complete a purchase using Stripe.",
//     stack: ["Next.js", "Strapi", "Stripe", "Auth0", "Styled-Components"],
//     link: "ericyakubu-styled.vercel.app",
//     git: "https://github.com/ericyakubu/Styled",
//     img: "./img/shop.png",
//   },
//   {
//     name: "weather app",
//     discription:
//       "Easy to use App to get detailed info for a week at any location. Just type in the address you're interested in and find out what the weather holds for you tomorrow.",
//     stack: ["React", "Styled-Components"],
//     link: "ericyakubu-weather-app.vercel.app",
//     git: "https://github.com/ericyakubu/weather_app",
//     img: "./img/weather.png",
//   },
//   {
//     name: "calculator",
//     discription:
//       "Provides simple and advanced mathematical functions in a beautifully designed app.",
//     stack: ["HTML 5", "CSS 3", "JavaScript"],
//     link: "ericyakubu-calculator.vercel.app",
//     git: "https://github.com/ericyakubu/calculator_html",
//     img: "./img/calculator.png",
//   },
//   {
//     name: "to-do list",
//     discription:
//       "Easy to use Todo App that allows you to filter all important, completed and other tasks.",
//     stack: ["HTML 5", "CSS 3", "JavaScript"],
//     link: "ericyakubu-todo.vercel.app",
//     git: "https://github.com/ericyakubu/todo_list",
//     img: "./img/todo.png",
//   },
// ];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects">
      <h3 className="section_title">Projects</h3>
      <p className="projects_p">
        A small gallery of recent projects chosen by me.
      </p>

      <div className="projects_main">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
