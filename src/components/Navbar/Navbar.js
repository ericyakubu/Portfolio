import React from "react";
import { Navigation, Bullet, NavLink } from "./styles";

function Navbar() {
    return (
        <Navigation>
            <NavLink href="#home">
                <div className="bullet" />
                <div className="linkInfo">
                    <h2>01</h2>
                    <h2>Home</h2>
                </div>
            </NavLink>

            <Bullet />
            <Bullet />
            <Bullet />

            <NavLink href="#about">
                <div className="bullet" />
                <div className="linkInfo">
                    <h2>02</h2>
                    <h2>About</h2>
                </div>
            </NavLink>

            <Bullet />
            <Bullet />
            <Bullet />

            <NavLink href="#skills">
                <div className="bullet" />
                <div className="linkInfo">
                    <h2>03</h2>
                    <h2>Skills</h2>
                </div>
            </NavLink>

            <Bullet />
            <Bullet />
            <Bullet />

            <NavLink href="#projects">
                <div className="bullet" />
                <div className="linkInfo">
                    <h2>04</h2>
                    <h2>Projects</h2>
                </div>
            </NavLink>

            <Bullet />
            <Bullet />
            <Bullet />

            <NavLink href="#contact">
                <div className="bullet" />
                <div className="linkInfo">
                    <h2>05</h2>
                    <h2>Contact</h2>
                </div>
            </NavLink>
        </Navigation>
    );
}

export default Navbar;
