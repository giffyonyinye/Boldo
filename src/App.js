import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Componets/homePage/NavBar";
import FirstSection from "./Componets/FirstSection";
import SecondSection from "./Componets/SecondSection";
import MiddleSection from "./Componets/MiddleSection";
import ThirdSection from "./Componets/ThirdSection";
import ForthSection from "./Componets/ForthSection";
import SubForth from "./Componets/SubForth";
import Contact from "./Componets/Contact";
import Footer from "./Componets/homePage/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <MiddleSection />
      <ThirdSection />
      <ForthSection />
      <SubForth />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
