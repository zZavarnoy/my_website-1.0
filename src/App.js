import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import ButtonScrollToTop from "./components/ButtonScrollToTop";

import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

import { useState } from "react";

function App() {
    const stor = JSON.parse(localStorage.getItem("dark"));

    const [darkMode, setDarkMode] = useState(!!stor);

    localStorage.setItem("dark", JSON.stringify(darkMode));

    return (
        <div className="App">
            <div className={darkMode ? "dark" : ""}>
                <Header>
                    <span className="dark_mode_swiper">
                        <LuSun />
                        <label
                            className="switch"
                            onChange={() => {
                                setDarkMode((dark) => !dark);
                            }}
                        >
                            <input
                                type="checkbox"
                                defaultChecked={darkMode}
                            ></input>
                            <span className="slider round"></span>
                        </label>
                        <LuMoon />
                    </span>
                </Header>
                <div className={darkMode ? "container_dark" : "container"}>
                    <About theme={darkMode} />
                    <Works />
                    <Services theme={darkMode} />
                    <Contact theme={darkMode} />
                </div>
                <Footer />
                <ButtonScrollToTop />
            </div>
        </div>
    );
}

export default App;
