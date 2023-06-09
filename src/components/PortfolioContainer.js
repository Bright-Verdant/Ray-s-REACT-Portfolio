import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Folio from './pages/Folio';
import Contact from './pages/Contact';
import Footer from './footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Folio') {
      return <Folio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}
      <Footer />
    </div>
  );
}
