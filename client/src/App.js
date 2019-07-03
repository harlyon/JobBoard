import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import AddJob from './Admin/AddJob';



function App() {
  return (
    <div className="container">
      <Navbar />
      <AddJob />
      <Home />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
