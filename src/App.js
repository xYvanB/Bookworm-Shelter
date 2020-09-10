import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
