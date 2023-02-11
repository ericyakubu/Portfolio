import React, { useState } from "react";
import "./landing.scss";
import { FiMenu } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

const Landing: React.FC = () => {
    const time: Date = new Date();
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();

    const [modal, setModal] = useState<boolean>(false);
    const [theme, setTheme] = useState<boolean>(true);

    const changeModal = () => {
        setModal((prev) => !prev);
    };

    const changeTheme = () => {
        setTheme((prev) => !prev);
        if (theme) {
            document.documentElement.style.setProperty("--main_color", "#f6f6f6");
            document.documentElement.style.setProperty("--secondary_color", "#dfdfdf");
            document.documentElement.style.setProperty("--third_color", "#414141");
            document.documentElement.style.setProperty("--fifth_color", "#292929");
            document.documentElement.style.setProperty("--secondary_color_2", "#292929");
        } else {
            document.documentElement.style.setProperty("--main_color", "#292929");
            document.documentElement.style.setProperty("--secondary_color", "#323232");
            document.documentElement.style.setProperty("--third_color", "#d8d8d8");
            document.documentElement.style.setProperty("--fifth_color", "#f6f6f6");
            document.documentElement.style.setProperty("--secondary_color_2", "#323232");
        }
    };

    return (
        <>
            {modal ? (
                <div className="modal">
                    <div className="modal_top">
                        <h2 className="logo">
                            <span>Eric</span>
                            <span>Yakubu</span>
                        </h2>

                        <button onClick={changeModal}>
                            <RxCrossCircled />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <a href="#about" onClick={changeModal}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={changeModal}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={changeModal}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={changeModal}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="modal_bottom">
                        <a href="mailto:yakubueric@gmail.com">yakubueric@gmail.com</a>
                        <a href="tel:+1(647)-464-7997">+1(647)-464-7997</a>
                        <h3>Uxbridge, ON</h3>
                    </div>
                </div>
            ) : (
                <div className="landing">
                    <header>
                        <h2 className="logo">
                            <span>Eric</span>
                            <span>Yakubu</span>
                        </h2>
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <button className="button button_dark menu" onClick={changeModal}>
                            <FiMenu />
                        </button>
                        <div className="header_controls">
                            <a className="button button_dark" href="#contact">
                                Get in touch
                            </a>
                            <div className="theme">
                                <button className={`theme_button ${theme ? null : "theme_button_theme"}`} onClick={changeTheme} />
                                <p>{theme ? "light" : "dark"}</p>
                            </div>
                        </div>
                    </header>
                    <div className="landing_main">
                        <h4>front-end web developer</h4>
                        <h1>eric yakubu</h1>
                        <p>Hi There! I'm Eric, a Front-End Developer. The main characteristic of my work ine could give has been simple: «‎Get done. Fast». I looking for interesting projects and this is my portfolio.</p>
                        <a className="button button_dark" href="#contact">
                            Get in touch
                        </a>
                    </div>
                    <div className="landing_bottom">
                        <span>based in canada</span>
                        <span>
                            local time {hours} : {minutes >= 10 ? minutes : `0${minutes}`}
                        </span>
                    </div>
                </div>
            )}
            {/* <div className="modal">
                <div className="modal_top">
                    <h2 className="logo">
                        <span>Eric</span>
                        <span>Yakubu</span>
                    </h2>

                    <button>
                        <RxCrossCircled />
                    </button>
                </div>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="modal_bottom">
                    <a href="mailto:yakubueric@gmail.com">yakubueric@gmail.com</a>
                    <a href="tel:+1(647)-464-7997">+1(647)-464-7997</a>
                    <h3>Uxbridge, ON</h3>
                </div>
            </div> */}
            {/* <div className="landing">
                
                <header>
                    <h2 className="logo">
                        <span>Eric</span>
                        <span>Yakubu</span>
                    </h2>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button className="button button_dark menu">
                        <FiMenu />
                    </button>
                    <div className="header_controls">
                        <button className="button button_dark">Get in touch</button>
                        <div className="theme">
                            <button className="theme_button" />
                            <p>light</p>
                        </div>
                    </div>
                </header>
                <div className="landing_main">
                    <h4>front-end web developer</h4>
                    <h1>eric yakubu</h1>
                    <p>Hi There! I'm Eric, a Front-End Developer. The main characteristic of my work ine could give has been simple: «‎Get done. Fast». I looking for interesting projects and this is my portfolio.</p>
                    <button className="button button_dark">Get in touch</button>
                </div>
                <div className="landing_bottom">
                    <span>based in canada</span>
                    <span>
                        local time {hours} : {minutes >= 10 ? minutes : `0${minutes}`}
                    </span>
                </div>
            </div> */}
        </>
    );
};

export default Landing;
