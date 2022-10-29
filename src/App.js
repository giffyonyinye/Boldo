import "./App.css";
import HomePage from "./Components/LandingPage/HomePage";

import BaseLayout from "./Components/Layout/BaseLayout";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <HomePage/>
      </BaseLayout>
      
    </div>
  );
}

export default App;
