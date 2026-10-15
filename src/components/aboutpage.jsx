import React from 'react';
import fotoUrl from '../assets/foto.jpg';
import { useT } from '../prefs.jsx';
import Window from './Window';
import SectionHead from './SectionHead';

const bio = {
  pt: 'Oi! Sou Caliel, artista visual e dev fullstack em formação. Estudo Análise e Desenvolvimento de Sistemas na CESAR School e Artes Visuais na UFPE, e adoro transitar entre esses dois mundos: do rascunho e do protótipo no Figma até o código rodando. Já trabalhei com Python, Java, TypeScript, React Native e bancos de dados, e também levo arte e educação para escolas e comunidades.',
  en: "Hi! I'm Caliel, a visual artist and fullstack developer in training. I study Systems Analysis and Development at CESAR School and Visual Arts at UFPE, and I love moving between these two worlds: from sketches and Figma prototypes to working code. I've worked with Python, Java, TypeScript, React Native and databases, and I also bring art and education to schools and communities.",
};

const experience = [
  {
    title: { pt: 'pesquisa e desenvolvimento mobile', en: 'research & mobile development' },
    org: 'WING Games',
    date: { pt: 'abr 2026 - atual', en: 'apr 2026 - present' },
    text: {
      pt: 'Faço parte de um grupo de pesquisa que cria um app gamificado de alfabetização para crianças neurodivergentes. Desenvolvo telas e componentes em React Native e TypeScript, para Android e iOS, sempre pensando em acessibilidade.',
      en: "I'm part of a research group creating a gamified literacy app for neurodivergent kids. I build screens and components with React Native and TypeScript for Android and iOS, always with accessibility in mind.",
    },
  },
  {
    title: { pt: 'estágio em cultura e arte-educação', en: 'cultural intern & art educator' },
    org: 'prefeitura do recife',
    date: { pt: 'mai 2025 - atual', en: 'may 2025 - present' },
    text: {
      pt: 'Levo atividades culturais para escolas e comunidades: oficinas, eventos e exposições que aproximam as pessoas da arte e da educação, com criatividade e inclusão no centro de tudo.',
      en: 'I bring cultural activities to schools and communities: workshops, events and exhibitions that bring people closer to art and education, with creativity and inclusion at the heart of it all.',
    },
  },
  {
    title: { pt: 'residência em desenvolvimento de software', en: 'software development resident' },
    org: 'residência tecnológica do porto digital',
    date: { pt: 'fev 2025 - atual', en: 'feb 2025 - present' },
    text: {
      pt: 'Desenvolvo soluções para empresas parceiras do Porto Digital: no back-end com Java Spring Boot e APIs REST, e no front-end com Angular e TypeScript. Participo do ciclo todo do produto, do protótipo no Figma ao deploy e ao pitch final.',
      en: "I build software for Porto Digital partner companies: back-end with Java Spring Boot and REST APIs, front-end with Angular and TypeScript. I'm part of the whole product cycle, from Figma prototypes to deploy and the final pitch.",
    },
  },
  {
    title: { pt: 'pesquisa e educação em museu', en: 'museum researcher & educator' },
    org: 'museu espaço ciência PE',
    date: { pt: 'fev 2025', en: 'feb 2025' },
    text: {
      pt: 'Conduzi visitas guiadas para públicos bem diversos, ministrei oficinas e pesquisei formas de deixar as visitas e os conteúdos educativos ainda melhores, despertando a curiosidade por ciência e tecnologia.',
      en: 'I led guided tours for all kinds of visitors, ran workshops and researched ways to make the tours and educational content even better, sparking curiosity about science and technology.',
    },
  },
  {
    title: { pt: 'estágio', en: 'internship' },
    org: 'smart SSMA consulting',
    date: { pt: 'abr 2022 - jul 2022', en: 'apr 2022 - jul 2022' },
    text: {
      pt: 'Pesquisei legislação de educação a distância, fiz uma formação para criação de cursos online e cuidei do ambiente virtual de aprendizagem, mantendo os cursos de segurança do trabalho sempre atualizados.',
      en: 'I researched distance-learning legislation, trained as an online course creator and took care of the virtual learning environment, keeping the occupational safety courses up to date.',
    },
  },
];

const education = [
  {
    title: { pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', en: 'Associate Degree in Systems Analysis and Development' },
    org: 'CESAR School',
    date: { pt: 'fev 2025 - atual', en: 'feb 2025 - present' },
  },
  {
    title: { pt: 'Licenciatura em Artes Visuais', en: 'Visual Arts Teaching Degree' },
    org: 'UFPE - Universidade Federal de Pernambuco',
    date: { pt: 'mai 2023 - atual', en: 'may 2023 - present' },
  },
  {
    title: { pt: 'Técnico em Segurança do Trabalho', en: 'Occupational Safety Technician' },
    org: 'IFPE - Instituto Federal de Pernambuco',
    date: { pt: 'mar 2018 - dez 2022', en: 'mar 2018 - dec 2022' },
  },
];

const skills = [
  { name: { pt: 'Front-end e Mobile', en: 'Front-end & Mobile' }, list: 'Angular, React, React Native, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Storybook, Vite' },
  { name: { pt: 'Back-end e Dados', en: 'Back-end & Data' }, list: 'Java, Spring Boot, REST APIs, Python, Pandas, C, PostgreSQL, MySQL' },
  {
    name: { pt: 'Design e UX', en: 'Design & UX' },
    list: {
      pt: 'UI Design, UX Design, Wireframing, Prototipação, User Flows, Arquitetura da Informação, Design Thinking, Figma',
      en: 'UI Design, UX Design, Wireframing, Prototyping, User Flows, Information Architecture, Design Thinking, Figma',
    },
  },
  { name: { pt: 'Arte e Mídia', en: 'Art & Media' }, list: 'Photoshop, Illustrator, Procreate, After Effects, Premiere Pro, Canva' },
  { name: { pt: 'Ferramentas', en: 'Tools' }, list: 'Git, Bash, Vercel, Notion, Google Workspace, Microsoft Office' },
];

const languages = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: 'B2', href: 'https://cert.efset.org/okTrTT' },
  { name: 'Libras', level: 'A1' },
  { name: { pt: 'Francês', en: 'French' }, level: 'A1' },
];

const links = [
  { label: 'GitHub', href: 'https://github.com/poeisie', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/calielfeijo/', external: true },
  { label: 'calielfeijo@gmail.com', href: 'mailto:calielfeijo@gmail.com' },
  { label: '+55 (81) 98165-4408', href: 'tel:+5581981654408' },
];

const AboutPage = () => {
  const t = useT();

  return (
    <section id="about" className="section">
      <SectionHead
        page="01"
        title={t({ pt: 'Sobre', en: 'About' })}
        note={t({ pt: 'prazer!', en: 'nice to meet you!' })}
      />

      <div className="about-intro">
        <figure className="polaroid taped">
          <img src={fotoUrl} alt="Caliel Feijó" />
          <figcaption className="note">{t({ pt: 'eu :)', en: 'me :)' })}</figcaption>
        </figure>

        <Window title={t({ pt: 'sobre.txt', en: 'about.txt' })} className="about-bio-win">
          <h3 className="about-name">Caliel Feijó</h3>
          <p className="pronouns">⚧ {t({ pt: 'pessoa não-binária, they/them', en: 'enby, they/them' })}</p>
          <p className="about-bio">{t(bio)}</p>
          <ul className="link-list">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Window>
      </div>

      <div className="about-grid">
        <Window title={t({ pt: 'experiencia.log', en: 'experience.log' })} className="about-exp-win">
          <ol className="entries">
            {experience.map((item) => (
              <li className="entry" key={item.org}>
                <p className="entry-date">{t(item.date)}</p>
                <h3 className="entry-title">{t(item.title)}</h3>
                <p className="entry-org">{item.org}</p>
                <p className="entry-text">{t(item.text)}</p>
              </li>
            ))}
          </ol>
        </Window>

        <div className="about-side">
          <Window title={t({ pt: 'formacao.txt', en: 'education.txt' })}>
            <ul className="entries entries--compact">
              {education.map((item) => (
                <li className="entry" key={item.org}>
                  <p className="entry-date">{t(item.date)}</p>
                  <h3 className="entry-title">{t(item.title)}</h3>
                  <p className="entry-org">{item.org}</p>
                </li>
              ))}
            </ul>
          </Window>

          <Window title={t({ pt: 'idiomas.cfg', en: 'languages.cfg' })}>
            <ul className="language-list">
              {languages.map((language) => (
                <li key={language.level + t(language.name)}>
                  <span className="language-name">{t(language.name)}</span>
                  {language.href ? (
                    <a href={language.href} target="_blank" rel="noopener noreferrer" className="language-level arrow-link">
                      {t(language.level)} ↗
                    </a>
                  ) : (
                    <span className="language-level">{t(language.level)}</span>
                  )}
                </li>
              ))}
            </ul>
          </Window>
        </div>
      </div>

      <div className="skills">
        <h3 className="skills-title note">{t({ pt: 'coisas que eu sei usar:', en: 'things i know how to use:' })}</h3>
        {skills.map((skill) => (
          <div className="skill-card" key={skill.list.en || skill.list}>
            <p className="skill-name">{t(skill.name)}</p>
            <p className="skill-list">{t(skill.list)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
