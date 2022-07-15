import React from "react";
import { Container, SectionTitle } from "../StyledComponents";
import { ContactContainer, ContactInfo, ContactOption, ContactForm, ContactEmail } from "./styles";
import { RiMailSendFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { homeAnimation, useScroll } from "../Animations";

function Contact() {
    const [element, animatonControls] = useScroll();
    return (
        <Container variants={homeAnimation} ref={element} animate={animatonControls} initial="hidden" id="contact">
            <SectionTitle variants={homeAnimation}>Contact</SectionTitle>
            <ContactContainer>
                <ContactInfo variants={homeAnimation}>
                    <ContactOption href="#">yakubueric@gmail.com</ContactOption>
                    <ContactOption href="#">+1(647)-464-7997</ContactOption>
                    <ContactOption href="#">Uxbridge, ON</ContactOption>
                </ContactInfo>
                <ContactEmail variants={homeAnimation}>Email me</ContactEmail>
                <ContactForm variants={homeAnimation}>
                    <div>
                        <div className="formInputSmall">
                            <input name="name" placeholder="Name" />
                        </div>
                        <div className="formInputSmall">
                            <input name="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="formInputBig">
                        <input name="subject" placeholder="Subject" />
                    </div>

                    <div className="formInputMessage">
                        <textarea name="message" placeholder="Message" rows={10} />
                    </div>

                    <button type="submit">
                        Send <RiMailSendFill />
                    </button>
                </ContactForm>
            </ContactContainer>
        </Container>
    );
}

export default Contact;
