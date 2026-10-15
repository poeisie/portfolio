import React, { useEffect, useState } from 'react';
import './App.css';
import { usePrefs, useT } from './prefs.jsx';

import HomePage from './components/homepage';
import AboutPage from './components/aboutpage';
import ProjectsArtGrid from './components/projectsartgrid';
import ProjectsDevGrid from './components/projectsdevgrid';
import ContactPage from './components/contactpage';

const SECTIONS = [
  { id: 'about', label: { pt: 'sobre', en: 'about' } },
  { id: 'arts', label: { pt: 'artes', en: 'arts' } },
  { id: 'dev', label: { pt: 'dev_', en: 'dev_' } },
  { id: 'contact', label: { pt: 'contato', en: 'contact' } },
];

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

// Hora de Recife no canto da barra, como num sistema antigo
const Clock = () => {
  const format = () =>
    new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Recife', hour: '2-digit', minute: '2-digit' });
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return <span className="menubar-clock" title="Recife, PE">{time}</span>;
};

// Qual seção está na tela, para destacar no menu
const useActiveSection = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...SECTIONS.map((s) => s.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
};

const MenuBar = () => {
  const t = useT();
  const { lang, setLang, theme, setTheme } = usePrefs();
  const active = useActiveSection();
  const isDark = theme === 'dark';

  return (
    <header className="menubar">
      <a href="#home" className="menubar-brand">
        <span aria-hidden="true">✝</span> POEISIE
      </a>

      <nav className="menubar-nav" aria-label={t({ pt: 'Seções', en: 'Sections' })}>
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? 'true' : undefined}
          >
            {t(section.label)}
          </a>
        ))}
      </nav>

      <div className="menubar-tools">
        <div className="lang-toggle" role="group" aria-label={t({ pt: 'Idioma', en: 'Language' })}>
          <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
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
        <Clock />
      </div>
    </header>
  );
};

const App = () => {
  const t = useT();

  return (
    <>
      <MenuBar />
      <main className="notebook">
        <HomePage />
        <AboutPage />
        <ProjectsArtGrid />
        <ProjectsDevGrid />
        <ContactPage />
      </main>
      <footer className="site-foot">
        <span>
          {t({
            pt: '© Todas as imagens são protegidas por direitos autorais. Caliel Feijó.',
            en: '© All images are subject to copyright. Caliel Feijó.',
          })}
        </span>
        <span className="site-foot-sign">⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧⁺</span>
      </footer>
    </>
  );
};

export default App;
