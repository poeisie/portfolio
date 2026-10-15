import React, { createContext, useContext, useEffect, useState } from 'react';

// Idioma e tema escolhidos por quem visita, lembrados no navegador
const PrefsContext = createContext(null);

const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // navegação privada: segue sem lembrar
  }
};

const initialLang = () => {
  const saved = read('lang');
  if (saved === 'pt' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

const initialTheme = () => {
  const saved = read('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const PrefsProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    write('lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write('theme', theme);
  }, [theme]);

  return (
    <PrefsContext.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </PrefsContext.Provider>
  );
};

export const usePrefs = () => useContext(PrefsContext);

// t({ pt, en }) devolve o texto no idioma atual; qualquer outro valor passa direto
export const useT = () => {
  const { lang } = usePrefs();
  return (value) =>
    value && typeof value === 'object' && 'pt' in value && 'en' in value ? value[lang] : value;
};
