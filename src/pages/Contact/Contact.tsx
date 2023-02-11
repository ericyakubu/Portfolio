import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement | any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        console.log(form.current);

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string, form.current as HTMLFormElement, process.env.REACT_APP_PUBLIC_KEY);
        alert("Thank you for reaching out to me, I'll contact you back as soon as possible!");
        form.current.reset();
    };

    return (
        <div id="contact" className="contact">
            <h3 className="section_title">Contact</h3>
            <p>I’m open to various forms pf cooperation, if you want to work together or just ask a question, then fill out the form below.</p>
            <form ref={form} onSubmit={sendEmail}>
                <label>
                    What is your name?
                    <input type="text" name="user_name" />
                </label>
                <label>
                    Your email:
                    <input type="email" name="user_email" />
                </label>
                <label>
                    A few words about the project:
                    <textarea rows={5} name="user_message" />
                </label>
                <button className="button button_dark" type="submit" value="Send">
                    Send
                </button>
            </form>
            <a href="mailto:yakubueric@gmail.com">yakubueric@gmail.com</a>
            <a href="tel:+1(647)-464-7997">+1(647)-464-7997</a>
            <h3>Uxbridge, ON</h3>
        </div>
    );
};

export default Contact;
