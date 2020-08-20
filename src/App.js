import React from 'react';
import './App.css';
import Header from "./components/Header";
import Memegenerator from "./components/Memegenerator";
import Footer from "./components/Footer";
import './components/style.css';


function App() {
  return (
    <div>
      <Header />
      <Memegenerator />
      <Footer />
    </div>
  );
}

export default App;
