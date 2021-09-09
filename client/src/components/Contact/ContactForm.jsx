import React, { useState } from "react";
import './ContactForm.css';
import onlineWorld from '../../assets/images/online-world.png';

const ContactForm = () => {
    // const [status, setStatus] = useState("Submit");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");

    // }

    return (
        <section className="form-section">

            <img className="main-img mb-4" src={onlineWorld} alt="connect" width="400"></img>

            <div className="form-signin">
                <form onSubmit={"handleSubmit"}>

                    <h1 className="h3 mb-3 fw-normal">Contact Me</h1>

                    <div className="form-floating">
                        <input type="text" name="name" className="form-control top" id="floatingInput"></input>
                        <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="floatingInput"></input>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div>
                        <textarea name="message" rows="3" className="form-control" placeholder="Message"></textarea>
                    </div>

                    <div className="checkbox mb-3"> {/* remove this later */}
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>

                </form>
            </div>

        </section>
    )
};

export default ContactForm;
