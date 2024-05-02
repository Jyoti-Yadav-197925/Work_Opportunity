import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import "./App.css";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";

const App = () => {
  return (
    <div className="App" >
      <div>
        <div className="white-gradient" />
        <NavBar />
        <Hero />
        <Companies />
        <Search />
        <Jobs/>
        <Value />
        <Footer />


      </div>
    </div>
  );
};

export default App;
