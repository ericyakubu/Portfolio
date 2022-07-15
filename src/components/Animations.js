import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const animatonControls = useAnimation();
    const [element, view] = useInView({ threshold: 0.5 });
    if (view) {
        animatonControls.start("shown");
    } else {
        animatonControls.start("hide");
    }

    return [element, animatonControls];
};

export const homeAnimation = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    hide: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
    shown: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut",
            staggerChildren: 0.5,
        },
    },
    // exit: {
    //     opacity: 0,
    //     x: 100,
    //     transition: {
    //         duration: 1.5,
    //         ease: "easeOut",
    //         staggerChildren: 0.5,
    //     },
    // },
};
export const skillsAnimation = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    hide: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
    shown: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
    // exit: {
    //     opacity: 0,
    //     x: 100,
    //     transition: {
    //         duration: 1.5,
    //         ease: "easeOut",
    //         staggerChildren: 0.5,
    //     },
    // },
};
