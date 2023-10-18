import React from "react";

import Carousel from "./components/Carousel/carousel";
import Nav from "./components/Header/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer"

import "boxicons";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Carousel />
        <ItemListContainer greeting="Productos a mostrar" />
      </header>
      
    </div>
  );
}

export default App;
