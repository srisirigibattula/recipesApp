import Cuisine from "./pages/Cuisine";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">     
      <BrowserRouter>
          <Cuisine/> 
          <Pages/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
