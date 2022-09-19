import React from "react"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Categories from "./Components/Categories/Categories";
import RandomMeal from "./Components/RandomMeal/RandomMeal";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/random" element={<RandomMeal />} />
      </Routes>
        <Footer />

      </Router>
     

    </div>
  );
}

export default App;
