import React from "react";

import Header from "./elements/header/Header";
import Main from "./elements/main/Main";
import Footer from "./elements/footer/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
