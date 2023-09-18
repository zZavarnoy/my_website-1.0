import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/works/Works";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Works />
            <Services />
            <Footer />
        </div>
    );
}

export default App;
