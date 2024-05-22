import About from "./components/About";
import Company from "./components/Company";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import News from "./components/News";
import Scrollup from "./components/Scrollup";
import Testimonial from "./components/Testimonial";
import Youcan from "./components/Youcan";
import "./sass/app.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Company />
        <About />
        <Introduce />
        <Youcan />
        <Feature />
        <Testimonial />
        <News />
      </div>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
