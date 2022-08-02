import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
  return (
    <div className="bg-main flex-1">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
