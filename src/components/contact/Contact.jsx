import { useState } from "react";
import styles from "./Contact.module.css";

function Contact({
    theme,
    successFormOnSubmit,
    invalidFormOnSubmit,
    failFormSubmit,
}) {
    const [data, setData] = useState({
        email: "",
        service: "consultation",
        text: "",
    });
    const [showValid, setShowValid] = useState(false);

    const validEmail = /^[A-Za-z0-9._]+@[a-z0-9]+(\.[a-z.]+)+$/;

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (validEmail.test(data.email)) {
            try {
                // const response = await fetch(
                //     "https://jsonplaceholder.typicode.com/posts",
                //     {
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify(data),
                //     }
                // );
                // console.log(response);

                // response.ok
                //     ? (() => {
                //           setData({
                //               email: "",
                //               service: "consultation",
                //               text: "",
                //           });
                //           setShowValid(false);
                //           successFormOnSubmit();
                //       })()
                //     : failFormSubmit();

                await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                setData({
                    email: "",
                    service: "consultation",
                    text: "",
                });
                setShowValid(false);
                successFormOnSubmit();
            } catch (error) {
                failFormSubmit();
                console.log(error);
            }
        } else {
            invalidFormOnSubmit();
        }
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
                        Your E-mail:
                        <input
                            type="email"
                            value={data.email}
                            required
                            onChange={(event) =>
                                handleInputChange(event, "email")
                            }
                            placeholder="example12@mail.com"
                            className={
                                theme
                                    ? styles.form__input_dark
                                    : styles.form__input
                            }
                            onFocus={() => setShowValid(true)}
                        />
                    </label>
                    {showValid ? (
                        validEmail.test(data.email) ? (
                            <div className={styles.form__block_valid}>
                                Valid E-mail
                            </div>
                        ) : (
                            <div className={styles.form__block_invalid}>
                                Invalid E-mail
                            </div>
                        )
                    ) : (
                        ""
                    )}
                </div>

                <div className={styles.form__block}>
                    <label>
                        Сhoose the type of work:
                        <select
                            name="cars"
                            className={
                                theme
                                    ? styles.form__input_dark
                                    : styles.form__input
                            }
                            onChange={(event) =>
                                handleInputChange(event, "service")
                            }
                        >
                            <option value="consultation">Сonsultation</option>
                            <option value="design_creation">
                                Design Creation
                            </option>
                            <option value="website_creation">
                                Website Сreation
                            </option>
                        </select>
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
                            placeholder="Here you can write your wishes and/or leave contacts on your social networks."
                            className={
                                theme
                                    ? styles.form__input_dark
                                    : styles.form__input
                            }
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
