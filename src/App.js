// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home'; // Pastikan pengimporan ini berada di file App.js

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Mengatur rute default */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
