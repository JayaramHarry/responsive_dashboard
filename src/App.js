
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Analytics = lazy(() => import('./components/Analytics/Analytics'));
const Settings = lazy(() => import('./components/Settings/Settings'));

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Router>
      <Header onToggleMenu={toggleMenu} />
      <div className='main-container'>
        <Sidebar menuVisible={menuVisible} />
        <main className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
