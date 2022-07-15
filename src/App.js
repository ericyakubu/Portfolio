import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { WorkProvider } from "./ContextAPI";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <WorkProvider>
            <Menu />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </WorkProvider>
    );
}

export default App;
