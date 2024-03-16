import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Properities from "./pages/Properities";
import PropDetails from "./pages/PropDetails";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/properities" element={<Properities/>}/>
        <Route path="/prop-details" element={<PropDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
    </Router>


  )
}

export default App
