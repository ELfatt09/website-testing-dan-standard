// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnergiAnginTesting from './pages/testing/energi-angin';
import EnergiAirTesting from './pages/testing/energi-air';
import EnergiSuryaTesting from './pages/testing/energi-surya';
import EnergiBiomassaTesting from './pages/testing/energi-biomassa';
import Layout from './components/layout';
import Home from './pages/home'; // Pastikan pengimporan ini berada di file App.js
import EnergiAnginStandard from './pages/standard/energi-angin';
import EnergiAirStandard from './pages/standard/energi-air';
import EnergiSuryaStandard from './pages/standard/energi-surya';
import EnergiBiomassaStandard from './pages/standard/energi-biomassa';
import EnergiNuklirStandard from './pages/standard/energi-nuklir';
import EnergiPanasBumiStandard from './pages/standard/energi-panas-bumi';
import NotFound from './pages/error/404';

import EnergiAnginRiset from './pages/riset/energi-angin';
import EnergiAirRiset from './pages/riset/energi-air';
import EnergiBiomassaRiset from './pages/riset/energi-biomassa';
import EnergiPanasBumiRiset from './pages/riset/energi-panas-bumi';
import EnergiSuryaRiset from './pages/riset/energi-surya';

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

          <Route path="/standard/energi-angin" element={<EnergiAnginStandard />} />
          <Route path="/standard/energi-air" element={<EnergiAirStandard />} />
          <Route path="/standard/energi-surya" element={<EnergiSuryaStandard />} />
          <Route path="/standard/energi-biomassa" element={<EnergiBiomassaStandard />} />
          <Route path="/standard/energi-nuklir" element={<EnergiNuklirStandard />} />
          <Route path="/standard/energi-panas-bumi" element={<EnergiPanasBumiStandard />} />

          <Route path="/riset/energi-angin" element={<EnergiAnginRiset />} />
          <Route path="/riset/energi-air" element={<EnergiAirRiset />} />
          <Route path="/riset/energi-biomassa" element={<EnergiBiomassaRiset />} />
          <Route path="/riset/energi-panas-bumi" element={<EnergiPanasBumiRiset />} />
          <Route path="/riset/energi-surya" element={<EnergiSuryaRiset />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

