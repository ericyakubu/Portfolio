import { createContext } from "react";

const WorkContext = createContext();

export function WorkProvider({ children }) {
    const skillsProvider = [
        {
            img: "./img/skills/html.png",
            name: "HTML 5",
        },
        {
            img: "./img/skills/css.png",
            name: "CSS 3",
        },
        {
            img: "./img/skills/javascript.png",
            name: "JavaScript",
        },
        {
            img: "./img/skills/react.png",
            name: "React",
        },
        {
            img: "./img/skills/sass.png",
            name: "SASS",
        },
        {
            img: "./img/skills/materialui.png",
            name: "Material UI",
        },
        {
            img: "./img/skills/bootstrap.png",
            name: "Bootstrap",
        },
        {
            img: "./img/skills/photoshop.png",
            name: "Photoshop",
        },
        {
            img: "./img/skills/xd.png",
            name: "Abode XD",
        },
        {
            img: "./img/skills/figma.png",
            name: "Figma",
        },
    ];
    const worksProvider = [
        {
            name: "test name 1",
            img: "./img/project.jpg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            stack: ["one", "two", "three", "four", "five", "six"],
            webLink: "weblink",
            gitLink: "gitLink",
        },
        {
            name: "test name 2",
            img: "./img/project.jpg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            stack: ["one", "two", "three"],
            webLink: "weblink",
            gitLink: "gitLink",
        },
    ];

    return <WorkContext.Provider value={{ skillsProvider, worksProvider }}>{children}</WorkContext.Provider>;
}

export default WorkContext;
