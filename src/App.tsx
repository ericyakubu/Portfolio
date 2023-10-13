import React from "react";
import "./style/styles.scss";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
