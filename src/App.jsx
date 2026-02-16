import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import BMI from './pages/BMI';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-zinc-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Suggest-Medicine" element={<Home />} />
            <Route path="/Suggest-Medicine/explore" element={<Explore />} />
            <Route path="/Suggest-Medicine/bmi" element={<BMI />} />
            <Route path="/Suggest-Medicine/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;