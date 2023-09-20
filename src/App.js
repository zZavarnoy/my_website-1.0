import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="App">
            <Header />
            <About />
            <Works />
            <Services />
            <Contact />
            <Footer />
            <button
                className="up_button"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            >
                <AiOutlineArrowUp />
            </button>
        </div>
    );
}

export default App;
