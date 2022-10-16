import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
  
    </div>
  );
};

export default App;
