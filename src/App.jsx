import React, { useState } from 'react';
import './App.css';

// Importar os componentes
import HomePage from './components/homepage';
import AboutPage from './components/aboutpage';
import ProjectsArtGrid from './components/projectsartgrid';
import ProjectsDevGrid from './components/projectsdevgrid';
import ContactPage from './components/contactpage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'arts':
        return <ProjectsArtGrid />;
      case 'dev':
        return <ProjectsDevGrid />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="main-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="logo">POEISIE</div>
          <div className="tagline">⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧⁺</div>
          
          <nav>
            <ul>
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                  className={currentPage === 'home' ? 'active' : ''}
                >
                  home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
                  className={currentPage === 'about' ? 'active' : ''}
                >
                  about
                </a>
              </li>
              <li>
                <a 
                  href="#arts" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('arts'); }}
                  className={currentPage === 'arts' ? 'active' : ''}
                >
                  arts
                </a>
              </li>
              <li>
                <a 
                  href="#dev" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('dev'); }}
                  className={currentPage === 'dev' ? 'active' : ''}
                >
                  dev_
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
                  className={currentPage === 'contact' ? 'active' : ''}
                >
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-copy">
          © All images are subject of copyright. Caliel Feijó.
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="content-area">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;