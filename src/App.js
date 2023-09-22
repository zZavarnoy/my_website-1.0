import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import ButtonScrollToTop from "./components/ButtonScrollToTop";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <About />
                {/* <Works /> */}
                <Services />
                <Contact />
            </div>
            <Footer />
            <ButtonScrollToTop />
        </div>
    );
}

export default App;
