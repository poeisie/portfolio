import React, { useEffect, useState } from 'react';
import muralColetivoImg from '../assets/1.jpg';
import coletivoSemearteImg from '../assets/semearte.jpg';
import oficinaEscolinhaImg from '../assets/12.jpg';
import adrastiaImg from '../assets/digital/adrastia.jpg';
import calielEsbocoImg from '../assets/digital/caliel-esboco.jpg';
import { useT } from '../prefs.jsx';

const muralArtists = [
  'Agatha Maria Silva de Oliveira',
  'Alessandro José da Silva',
  'Ana Júlia Ribeiro de Macedo',
  'Caliel Feijó de Melo Silva',
  'Cauã Teixeira Lima',
  'Elbany Gomes dos Santos',
  'Emanuelle Karla Basílio Ferreira Silva',
  'Flávia Alessandra Almeida Araújo',
  'Ilane Ribeiro Hirata',
  'Isadora de Melo Polesi',
  'Julie Kunii',
  'Letícia Vitória Campos de Melo',
  'Lírio Amarílis Matias',
  'Lucas Ângelo Botelho',
  'Maria Eduarda Malaquias Rodrigues',
  'Maria Joana Pequeno Aureliano da Silva',
  'Samuel Victor Guedes de Queiroz',
  'Vinicius Diniz Nunes',
];

const ArtistList = () => (
  <ul>
    {muralArtists.map((name) => <li key={name}>{name}</li>)}
  </ul>
);

const artProjects = [
  {
    image: adrastiaImg,
    title: 'Adrastia',
    description: {
      pt: 'Ícone de personagem em arte digital, que fiz para o meu perfil de artes @p_tlmaea.',
      en: 'A digital character icon I made for my art profile @p_tlmaea.',
    },
    fullContent: {
      pt: 'Ilustração digital em preto e branco, com traço limpo e acabamento de sticker.',
      en: 'Black-and-white digital illustration with clean lines and a sticker finish.',
    },
  },
  {
    image: calielEsbocoImg,
    title: 'Caliel',
    description: {
      pt: 'Esboço com o meu nome em lettering gótico.',
      en: 'A sketch with my name in gothic lettering.',
    },
    fullContent: {
      pt: 'Estudo de figura e tipografia em grafite sobre fundo vermelho.',
      en: 'Figure and type study in graphite on a red background.',
    },
  },
  {
    image: muralColetivoImg,
    title: { pt: 'Mural Coletivo', en: 'Collective Mural' },
    description: {
      pt: 'Leitura da Cidade e Criação de Mural no Morro da Conceição',
      en: 'Reading the City and Creating a Mural at Morro da Conceição',
    },
    fullContent: {
      pt: (
        <>
          <strong>A atividade Leitura da Cidade e Criação de Mural no Morro da Conceição foi uma experiência com os alunos da disciplina de Metodologia 3, no segundo semestre do ano de 2025, que uniu arte, território e memória.</strong> A proposta consistiu em uma vivência de leitura da cidade a partir da observação e da escuta sensível do Morro da Conceição, um espaço simbólico na cidade de Recife.
          <br/><br/>
          A primeira etapa aconteceu com uma caminhada pela escadaria do morro, conduzida pelo artista plástico e guia de turismo Fernando Lopes, que tem desenvolvido intervenções artísticas ligadas à história da comunidade. Durante o percurso, os estudantes foram convidados a perceber as cores, formas, sons e narrativas do lugar — elementos que revelam o diálogo entre fé, resistência e ancestralidade presentes no cotidiano dos moradores.
          <br/><br/>
          A partir dessa imersão, foi proposto um exercício criativo no qual os estudantes desenvolveram projetos de murais inspirados na paisagem e na vivência local. Em grupos, apresentaram suas propostas à comunidade, que participou ativamente do processo, escolhendo a imagem que mais representava o sentimento e a identidade do Morro da Conceição. Com base nessa escolha, foi realizada uma oficina coletiva para a execução do mural, transformando a arte em um gesto de diálogo e pertencimento. A pintura agora integra a paisagem do bairro e fará parte do projeto de Fernando Lopes “Turismo Recife no Morro”, que valoriza o patrimônio material e imaterial da região.
          <br/><br/>
          <strong>Conceito da Arte:</strong>
          <br/>
          A arte desenvolvida para o mural tem como tema “Raízes e Espiritualidade”, propondo uma reflexão visual sobre o encontro entre crenças, culturas e memórias. O pássaro representa o sincretismo religioso, símbolo da liberdade e da convivência entre diferentes tradições de fé. A flor de lírio, associada ao Candomblé, surge acolhida pelo Cristianismo, expressando o respeito e a integração entre as matrizes afro-brasileiras e cristãs que coexistem no morro. Ao fundo, o símbolo da Sankofa, originário da cultura Akan, convida a olhar para as raízes ancestrais como forma de compreender o presente e construir o futuro. O mural, portanto, não é apenas uma pintura, mas uma celebração das identidades e espiritualidades que habitam o Morro da Conceição — um tributo à força de sua comunidade e à potência transformadora da arte como linguagem de diálogo.
          <br/><br/>
          <strong>Artistas envolvidos:</strong>
          <ArtistList />
        </>
      ),
      en: (
        <>
          <strong>Reading the City and Creating a Mural at Morro da Conceição was an experience with the students of the Methodology 3 course, in the second semester of 2025, bringing together art, territory and memory.</strong> The idea was to read the city through observation and attentive listening at Morro da Conceição, a symbolic place in Recife.
          <br/><br/>
          The first step was a walk up the hill's staircase, led by visual artist and tour guide Fernando Lopes, who has been creating art interventions tied to the community's history. Along the way, the students were invited to notice the colors, shapes, sounds and stories of the place — elements that reveal the dialogue between faith, resistance and ancestry in the residents' everyday life.
          <br/><br/>
          From this immersion came a creative exercise: the students designed mural proposals inspired by the local landscape and way of life. In groups, they presented their ideas to the community, which took an active part in the process and chose the image that best represented the feeling and identity of Morro da Conceição. Based on that choice, a collective workshop brought the mural to life, turning art into a gesture of dialogue and belonging. The painting is now part of the neighborhood's landscape and will be included in Fernando Lopes' project “Turismo Recife no Morro”, which celebrates the region's tangible and intangible heritage.
          <br/><br/>
          <strong>The concept:</strong>
          <br/>
          The mural's theme is “Roots and Spirituality”, a visual reflection on the meeting of beliefs, cultures and memories. The bird represents religious syncretism, a symbol of freedom and of different faith traditions living side by side. The lily, associated with Candomblé, is embraced by Christianity, expressing respect and integration between the Afro-Brazilian and Christian traditions that coexist on the hill. In the background, the Sankofa symbol, from Akan culture, invites us to look back at our ancestral roots to understand the present and build the future. So the mural is more than a painting: it celebrates the identities and spiritualities of Morro da Conceição — a tribute to the strength of its community and to the transformative power of art as a language of dialogue.
          <br/><br/>
          <strong>Artists involved:</strong>
          <ArtistList />
        </>
      ),
    },
  },
  {
    image: coletivoSemearteImg,
    title: { pt: 'Coletivo Semearte', en: 'Semearte Collective' },
    description: {
      pt: 'Iniciativa cultural que promove arte e educação com ações comunitárias e oficinas criativas.',
      en: 'A cultural initiative promoting art and education through community actions and creative workshops.',
    },
  },
  {
    image: oficinaEscolinhaImg,
    title: { pt: 'Oficina Escolinha', en: 'Escolinha Workshop' },
    description: {
      pt: 'Oficinas de arte pensadas para estimular a criatividade das crianças.',
      en: 'Art workshops designed to spark children’s creativity.',
    },
    fullContent: {
      pt: (
        <>
          <strong>Prática na Escolinha de Arte do Recife – 2025</strong>
          <br/><br/>
          A turma de Metodologia realizou uma atividade em parceria com a Escolinha de Arte do Recife, vivenciando práticas e metodologias do ensino não formal em Artes Visuais. Os alunos conheceram a proposta pedagógica e a importância histórica da instituição, e realizaram uma visita de reconhecimento do espaço.
          <br/><br/>
          Em seguida, os alunos dividiram-se em três grupos para planejar e desenvolver oficinas destinadas às crianças atendidas pela Escolinha. A experiência destacou a sensibilização, a livre expressão e a inclusão como fundamentos do processo educativo em arte.
        </>
      ),
      en: (
        <>
          <strong>Practice at Escolinha de Arte do Recife – 2025</strong>
          <br/><br/>
          Our Methodology class partnered with Escolinha de Arte do Recife to experience non-formal teaching practices and methods in Visual Arts. We learned about the school's teaching approach and its historical importance, and visited the space to get to know it.
          <br/><br/>
          Then we split into three groups to plan and run workshops for the children who attend the Escolinha. The experience highlighted sensitivity, free expression and inclusion as the foundations of art education.
        </>
      ),
    },
  },
];

// Componente para cada tile de arte
const ArtTile = ({ imageSrc, title, description, onClick }) => (
  <button type="button" className="art-tile" onClick={onClick}>
    <img src={imageSrc} alt={title} loading="lazy" />
    <div className="art-tile-info">
      <p className="art-tile-title">{title}</p>
      {description && <p className="art-tile-desc">{description}</p>}
    </div>
  </button>
);

// Modal expandido
const ExpandedModal = ({ project, onClose }) => {
  const t = useT();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={t(project.title)}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label={t({ pt: 'Fechar', en: 'Close' })}>✕</button>
        <img src={project.image} alt={t(project.title)} className="modal-img" />
        <h2 className="modal-title">{t(project.title)}</h2>
        <p className="modal-lede">{t(project.description)}</p>
        {project.fullContent && <div className="modal-body">{t(project.fullContent)}</div>}
      </div>
    </div>
  );
};

const ProjectsArtGrid = () => {
  const t = useT();
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">{t({ pt: 'artes', en: 'arts' })}</p>
        <h1 className="page-title">{t({ pt: 'Artes', en: 'Arts' })}</h1>
        <p className="page-lede">
          {t({
            pt: 'Ilustração, muralismo e arte-educação: um pouco do que eu crio com as mãos e com as pessoas.',
            en: 'Illustration, murals and art education: a bit of what I make with my hands and with people.',
          })}
        </p>
      </header>

      <div className="art-grid">
        {artProjects.map((project) => (
          <ArtTile
            key={project.image}
            imageSrc={project.image}
            title={t(project.title)}
            description={t(project.description)}
            onClick={() => setExpandedProject(project)}
          />
        ))}
      </div>

      {expandedProject && (
        <ExpandedModal
          project={expandedProject}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsArtGrid;
