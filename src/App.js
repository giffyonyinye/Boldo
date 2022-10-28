import "./App.css";
import HomePage from "./Components/LandingPage/HomePage";
// import SecondSection from "./Componets/SecondSection";
// import MiddleSection from "./Componets/MiddleSection";
// import ThirdSection from "./Componets/ThirdSection";
// import ForthSection from "./Componets/ForthSection";
// import SubForth from "./Componets/SubForth";
// import Contact from "./Componets/Contact";
// import Footer from "./Componets/Layout/Footer";
import BaseLayout from "./Components/Layout/BaseLayout";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <HomePage/>
      </BaseLayout>
      {/* <NavBar />
      <FirstSection />
      <SecondSection />
      <MiddleSection />
      <ThirdSection />
      <ForthSection />
      <SubForth />
      <Contact />
      <Footer/> */}
    </div>
  );
}

export default App;
