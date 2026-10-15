import React from 'react';

// Cabeçalho de cada parte do caderno: número da página, título gótico e uma anotação à mão
const SectionHead = ({ page, title, note }) => (
  <header className="section-head">
    <p className="kicker">pág. {page}</p>
    <h2 className="section-title">{title}</h2>
    {note && <p className="note section-note">{note}</p>}
  </header>
);

export default SectionHead;
