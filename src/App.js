import logo from './logo.svg';
import './App.css';
import NavBar from './Componets/homePage/NavBar'
import FirstSection from './Componets/FirstSection';
import SecondSection from './Componets/SecondSection';
import MiddleSection from './Componets/MiddleSection';
import ThirdSection from './Componets/ThirdSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <MiddleSection />
      <ThirdSection/>
     
    </div>
  );
}

export default App;
