import React from "react";
import "./skill.scss";

interface Props {
    name: string;
    image: JSX.Element;
}

const Skill: React.FC<Props> = ({ name, image }) => {
    return (
        <div className="skill">
            <div className="skill_icon">{image}</div>
            <h5 className="skill_name">{name}</h5>
        </div>
    );
};

export default Skill;
