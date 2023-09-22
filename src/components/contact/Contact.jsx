import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
    const [data, setData] = useState({ email: "", text: "" });

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     alert(JSON.stringify(data));
    //     setData({ email: "", text: "" });
    // }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await fetch("m380680908367@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setData({ email: "", text: "" });
    };

    function handleInputChange(event, name) {
        setData({ ...data, [name]: event.target.value });
    }

    return (
        <div className={styles.contact} id="contacts">
            <h1>Contact With Me</h1>
            <form onSubmit={handleFormSubmit} className={styles.contact__form}>
                <div className={styles.form__block}>
                    <label>
                        E-mail:
                        <input
                            type="text"
                            value={data.email}
                            onChange={(event) =>
                                handleInputChange(event, "email")
                            }
                            className={styles.form__input}
                        />
                    </label>
                </div>
                <div className={styles.form__block}>
                    <label>
                        Your Message:
                        <textarea
                            type="text"
                            value={data.text}
                            onChange={(event) =>
                                handleInputChange(event, "text")
                            }
                            className={styles.form__input}
                        ></textarea>
                    </label>
                </div>
                <button type="submit" className={styles.form__button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
