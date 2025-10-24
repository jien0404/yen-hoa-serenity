import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AttractionsPage from './pages/AttractionsPage';
import CuisinePage from './pages/CuisinePage';
import TravelGuidePage from './pages/TravelGuidePage';
import PoiDetailPage from './pages/PoiDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/cuisine" element={<CuisinePage />} />
            <Route path="/travel-guide" element={<TravelGuidePage />} />
            <Route path="/poi/:id" element={<PoiDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
