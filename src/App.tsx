import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./style/styles.scss";

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
