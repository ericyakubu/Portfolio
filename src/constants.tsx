import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiMaterialui,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { Projects } from "./types";

export const skillsArray: (string | JSX.Element)[][] = [
  ["HTML 5", <AiFillHtml5 />],
  ["CSS 3", <SiCss3 />],
  ["JavaScript", <SiJavascript />],
  ["React", <SiReact />],
  ["Redux Toolkit", <SiRedux />],
  ["SCSS", <SiSass />],
  ["Material UI", <SiMaterialui />],
  ["Tailwind", <SiTailwindcss />],
  ["Photoshop", <SiAdobephotoshop />],
  ["Adobe XD", <SiAdobexd />],
  ["Figma", <SiFigma />],
];

export const projects: Projects[] = [
  {
    name: "Styled clothing store",
    discription:
      "Styled is a full-stack online store built using MERN. Using 'Styled,' users can find any clothing and accessories, and the implemented filter will make their experience much easier and more enjoyable.",
    stack: [
      "React.js",
      "Node.js",
      "Stripe",
      "Axios",
      "Redux Toolkit",
      "MongoDB",
      "Express",
      "SCSS",
    ],
    link: "https://styled-ericyakubu.vercel.app/",
    git: "https://github.com/ericyakubu/Styled",
    img: "./img/shop.webp",
  },
  {
    name: "Wheelzhub car rent app",
    discription:
      "This application is built for users to navigate through a vast database of cars to find the one they want to rent. The application allows them to see all the details about the selected car to make sure they will make the best choice for them.",
    stack: ["Next.js", "Axios", "Tailwind"],
    link: "https://wheelzhub-ericyakubu.vercel.app/",
    git: "https://github.com/ericyakubu/Wheelzhub",
    img: "./img/cars.webp",
  },
  {
    name: "Youtube clone",
    discription:
      "A new alternative to YouTube entered the market. This application lets you browse millions of videos you can enjoy in your free time.",
    stack: ["React.js", "Axios", "Material UI"],
    link: "https://youtube-ericyakubu.vercel.app/",
    git: "https://github.com/ericyakubu/youtube",
    img: "./img/calculator.webp",
  },
  {
    name: "Golds Gym fitness app",
    discription:
      "This application allows you to browse through hundreds of exercises for your gym and at-home workouts. Here, you can find all sorts of exercises for any body muscle group to ensure you get the best results in the shortest amount of time.",
    stack: ["React.js", "Material UI"],
    link: "https://fitness-app-ericyakubu.vercel.app/",
    git: "https://github.com/ericyakubu/fitness_app",
    img: "./img/barbel.webp",
  },
];
