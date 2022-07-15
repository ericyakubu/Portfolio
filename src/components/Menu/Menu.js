import React, { useState } from "react";
import { MenuBtnContainer, MenuContainer } from "./styles";

function Menu() {
    const [openMenu, setOpenMenu] = useState(false);
    const test = () => {
        setOpenMenu(!openMenu);
        console.log(`test succesful`);
    };

    return (
        <>
            <MenuBtnContainer>
                <div className={openMenu ? "menuBtn open" : "menuBtn"} onClick={test}>
                    <div className="menuBtnBurger"></div>
                </div>
            </MenuBtnContainer>

            <MenuContainer style={!openMenu ? { transform: "translateX(-100%)" } : null}>
                <div>
                    <a href="#home" onClick={test}>
                        Home
                    </a>
                    <a href="#about" onClick={test}>
                        About
                    </a>
                    <a href="#skills" onClick={test}>
                        Skills
                    </a>
                    <a href="#projects" onClick={test}>
                        Portfolio
                    </a>
                    <a href="#contact" onClick={test}>
                        Contact
                    </a>
                </div>
            </MenuContainer>
        </>
    );
}

export default Menu;
