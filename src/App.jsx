import React, { useEffect, useState } from 'react';
import './App.css';
import { usePrefs, useT } from './prefs.jsx';

// Importar os componentes
import HomePage from './components/homepage';
import AboutPage from './components/aboutpage';
import ProjectsArtGrid from './components/projectsartgrid';
import ProjectsDevGrid from './components/projectsdevgrid';
import ContactPage from './components/contactpage';

const PAGES = [
  { id: 'home', label: { pt: 'início', en: 'home' }, Component: HomePage },
  { id: 'about', label: { pt: 'sobre', en: 'about' }, Component: AboutPage },
  { id: 'arts', label: { pt: 'artes', en: 'arts' }, Component: ProjectsArtGrid },
  { id: 'dev', label: { pt: 'dev_', en: 'dev_' }, Component: ProjectsDevGrid },
  { id: 'contact', label: { pt: 'contato', en: 'contact' }, Component: ContactPage },
];

// A aba vem do #hash da URL, assim dá para compartilhar o link direto (ex.: /#arts)
const pageFromHash = () => {
  const hash = window.location.hash.slice(1);
  return PAGES.some((page) => page.id === hash) ? hash : 'home';
};

const Footer = () => {
  const t = useT();
  return (
    <div className="site-foot">
      {t({
        pt: '© Todas as imagens são protegidas por direitos autorais. Caliel Feijó.',
        en: '© All images are subject to copyright. Caliel Feijó.',
      })}
    </div>
  );
};

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const Toolbar = () => {
  const { lang, setLang, theme, setTheme } = usePrefs();
  const t = useT();
  const isDark = theme === 'dark';

  return (
    <div className="toolbar">
      <div className="lang-toggle" role="group" aria-label={t({ pt: 'Idioma', en: 'Language' })}>
        <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
        <span aria-hidden="true">/</span>
        <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark
          ? t({ pt: 'Mudar para o modo claro', en: 'Switch to light mode' })
          : t({ pt: 'Mudar para o modo noturno', en: 'Switch to dark mode' })}
        title={isDark ? t({ pt: 'Modo claro', en: 'Light mode' }) : t({ pt: 'Modo noturno', en: 'Dark mode' })}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

const App = () => {
  const t = useT();
  const [currentPage, setCurrentPage] = useState(pageFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(pageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { Component } = PAGES.find((page) => page.id === currentPage);

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div>
            <a href="#home" className="brand">POEISIE</a>
            <div className="tagline">⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧⁺</div>
          </div>

          <nav aria-label={t({ pt: 'Seções', en: 'Sections' })}>
            <ul className="nav">
              {PAGES.map((page) => (
                <li key={page.id}>
                  <a
                    href={`#${page.id}`}
                    aria-current={currentPage === page.id ? 'page' : undefined}
                  >
                    {t(page.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Toolbar />
        </div>

        <Footer />
      </aside>

      {/* CONTENT AREA */}
      <main className="content">
        <Component />
        <Footer />
      </main>
    </div>
  );
};

export default App;
