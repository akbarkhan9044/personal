import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Expertise from "./Expertise/Expertise";
import Works from "./components/Works/Works";
import css from "./styles/app.module.scss";
import Portifilio from "./components/Portifilio/Portifilio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Expertise />
        <Works />
        <Portifilio />
        <People />
        <Footer />
      </div>
    </div>
  );
}

export default App;
