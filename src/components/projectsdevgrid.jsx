import React from 'react';
import { useT } from '../prefs.jsx';

const projects = [
  {
    title: 'Integra+',
    description: {
      pt: 'Projeto da Residência do Porto Digital voltado para saúde e bem-estar (ODS 3). Foi selecionado entre 56 equipes para o Demoday, premiado na Mostra Expotech Educação (REC’n’Play) e aprovado na pré-incubação do Porto Digital 2026!',
      en: "A Porto Digital Residency project focused on health and well-being (SDG 3). It was selected among 56 teams for Demoday, awarded at the Expotech Education Showcase (REC’n’Play) and accepted into Porto Digital's 2026 pre-incubation program!",
    },
    technologies: ['Figma', 'Illustrator', 'Canva'],
    liveLink: 'https://drive.google.com/drive/folders/1SxRB9e3zzwiGbbVyNI8yAMH8cgTENMT_?usp=sharing',
    liveLabel: { pt: 'Ver projeto →', en: 'See project →' },
  },
  {
    title: 'TransCare',
    description: {
      pt: 'Uma plataforma de saúde pensada para pessoas LGBTQIAPN+. Cuidei do front-end (componentes, serviços e rotas) e fui SCRUM Master do time.',
      en: "A health platform designed for LGBTQIAPN+ people. I handled the front-end (components, services and routes) and was the team's SCRUM Master.",
    },
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'SCRUM'],
    githubLink: 'https://github.com/netokemon/projeto-fundamentos-de-software',
  },
  {
    title: 'Vem pra Arena',
    description: {
      pt: 'Um sistema para gerenciar eventos e ingressos esportivos. Trabalhei no front-end e no design, e ajudei a estruturar o banco de dados.',
      en: 'A system for managing sports events and tickets. I worked on the front-end and design, and helped structure the database.',
    },
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    githubLink: 'https://github.com/poeisie/poo-project',
  },
  {
    title: 'Lógica à La Carte',
    description: {
      pt: 'Um jogo de terminal que ensina Lógica Proposicional de um jeito divertido. Ficou em 2º lugar na Tech Night e levou Melhor Jogo PIF na Tech Design Showcase da CESAR School.',
      en: "A terminal game that teaches propositional logic in a fun way. It took 2nd place at Tech Night and won Best PIF Game at CESAR School's Tech Design Showcase.",
    },
    technologies: ['C', 'CLI'],
    githubLink: 'https://github.com/giumari18/projeto-de-pif',
  },
  {
    title: 'Chronicles of Lumi',
    description: {
      pt: 'Meu projeto pessoal: um jogo de plataforma 2D em pixel art preto e branco, com movimento, colisão e física feitos do zero.',
      en: 'My personal project: a 2D platformer in black-and-white pixel art, with movement, collision and physics built from scratch.',
    },
    technologies: ['Python', 'Pygame Zero', 'Pixel Art'],
    githubLink: 'https://github.com/poeisie/chronicles-of-lumi',
  },
  {
    title: { pt: 'Gestão de Restaurante', en: 'Restaurant Manager' },
    description: {
      pt: 'Um sistema CRUD completo para facilitar a rotina de um restaurante, com processamento de dados em Pandas.',
      en: "A full CRUD system to make a restaurant's daily routine easier, with data processing in Pandas.",
    },
    technologies: ['Python', 'Pandas'],
    githubLink: 'https://github.com/netokemon/projeto-crud-fp',
  },
];

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, liveLabel }) => (
  <article className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{description}</p>
    <div className="tags">
      {technologies.map((tech) => (
        <span className="tag" key={tech}>{tech}</span>
      ))}
    </div>
    <div className="card-links">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="arrow-link">
          GitHub →
        </a>
      )}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="arrow-link">
          {liveLabel}
        </a>
      )}
    </div>
  </article>
);

const ProjectsDevGrid = () => {
  const t = useT();

  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">dev_</p>
        <h1 className="page-title">{t({ pt: 'Projetos', en: 'Projects' })}</h1>
        <p className="page-lede">
          {t({
            pt: 'Coisas que construí na faculdade, na residência e por pura diversão. Clica para ver o código!',
            en: "Things I've built at school, during my residency and just for fun. Click through to see the code!",
          })}
        </p>
      </header>

      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.githubLink || project.liveLink}
            title={t(project.title)}
            description={t(project.description)}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            liveLabel={t(project.liveLabel)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsDevGrid;
