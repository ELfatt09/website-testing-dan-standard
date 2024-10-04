// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnergiAnginTesting from './pages/testing/energi-angin';
import EnergiAirTesting from './pages/testing/energi-air';
import EnergiSuryaTesting from './pages/testing/energi-surya';
import EnergiBiomassaTesting from './pages/testing/energi-biomassa';
import Layout from './components/layout';
import Home from './pages/home'; // Pastikan pengimporan ini berada di file App.js

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Mengatur rute default */}
          <Route path="/testing/energi-angin" element={<EnergiAnginTesting />} /> {/* Mengatur rute default */}
          <Route path="/testing/energi-air" element={<EnergiAirTesting />} />
          <Route path="/testing/energi-Surya" element={<EnergiSuryaTesting />} /> {/* Mengatur rute default */}
          <Route path="/testing/energi-biomassa" element={<EnergiBiomassaTesting />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
