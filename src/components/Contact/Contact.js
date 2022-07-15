import React, { useRef } from "react";
import { Container, SectionTitle } from "../StyledComponents";
import { ContactContainer, ContactInfo, ContactOption, ContactForm, ContactEmail } from "./styles";
import { RiMailSendFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { homeAnimation, useScroll } from "../Animations";
import emailjs from "emailjs-com";

function Contact() {
    const formRef = useRef();
    const [element, animatonControls] = useScroll();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_h9ugz1g", "template_q7vjsvb", e.target, "hPzqgJtE0w5VJyj1k");
        alert("Thank you for reaching out to me, I'll contact you back as soon as possible!");
        formRef.current.reset();
    };
    return (
        <Container variants={homeAnimation} ref={element} animate={animatonControls} initial="hidden" id="contact">
            <SectionTitle variants={homeAnimation}>Contact</SectionTitle>
            <ContactContainer>
                <ContactInfo variants={homeAnimation}>
                    <ContactOption href="mailto: yakubueric@gmail.com">yakubueric@gmail.com</ContactOption>
                    <ContactOption href="tel: +1(647)-464-7997">+1(647)-464-7997</ContactOption>
                    <ContactOption href="#">Uxbridge, ON</ContactOption>
                </ContactInfo>
                <ContactEmail variants={homeAnimation}>Email me</ContactEmail>
                <ContactForm variants={homeAnimation} onSubmit={sendEmail} ref={formRef}>
                    <div>
                        <div className="formInputSmall">
                            <input name="user_name" type="text" placeholder="Name" />
                        </div>
                        <div className="formInputSmall">
                            <input name="user_email" type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="formInputBig">
                        <input name="user_subject" placeholder="Subject" />
                    </div>

                    <div className="formInputMessage">
                        <textarea name="user_message" placeholder="Message" rows={10} />
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
