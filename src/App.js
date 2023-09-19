import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Works />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
