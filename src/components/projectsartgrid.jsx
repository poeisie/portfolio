import React, { useState } from 'react';
import muralColetivoImg from '../assets/1.jpg'; 
import coletivoSemearteImg from '../assets/semearte.jpg';
import oficinaEscolinhaImg from '../assets/12.jpg';

// Componente para cada tile de arte
const ArtTile = ({ imageSrc, title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderRadius: '0px',
        position: 'relative',
        aspectRatio: '1 / 1',
        backgroundColor: '#f5f5f5'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        const overlay = e.currentTarget.querySelector('.art-overlay');
        if (overlay) overlay.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        const overlay = e.currentTarget.querySelector('.art-overlay');
        if (overlay) overlay.style.opacity = '0';
      }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e0e0e0',
        position: 'relative'
      }}>
        {!imageSrc && (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: 0.3
          }}></div>
        )}
        
        {/* Overlay com informações */}
        <div className="art-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '30px',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}>
          <div style={{ width: '100%' }}>
            {title && (
              <h3 style={{
                fontSize: '1.8rem',
                color: '#fff',
                marginBottom: '10px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>{title}</h3>
            )}
            {description && (
              <p style={{
                fontSize: '1rem',
                color: '#e0e0e0',
                lineHeight: '1.5',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>{description}</p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Modal expandido
const ExpandedModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <>
      {/* Background escuro */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease'
        }}
      />
      
      {/* Modal de conteúdo */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        maxWidth: '1000px',
        height: '80vh',
        backgroundColor: '#fff',
        zIndex: 1000,
        overflow: 'auto',
        animation: 'slideUp 0.3s ease'
      }}>
        <div style={{
          width: '100%',
          minHeight: '100%', 
          backgroundColor: '#fff',
          position: 'relative',
          padding: '60px'
        }}>
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            color: '#1a1a1a', 
            
          }}>
            {/* Botão de Fechar */}
            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                background: 'transparent',
                color: '#1a1a1a',
                border: 'none',
                padding: '15px 20px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              ✕
            </button>
            
            {/* Imagem Principal do Projeto no Modal */}
            <div style={{ width: '100%', height: 'auto', marginBottom: '40px' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '10px',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}>{project.title}</h2>
            
            <p style={{
              fontSize: '1.5rem',
              lineHeight: '1.8',
              marginBottom: '30px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300',
              color: '#666'
            }}>{project.description}</p>
            
            {project.fullContent && (
              <div style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                {project.fullContent}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  );
};

const ProjectsArtGrid = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const artProjects = [
    { 
      image: muralColetivoImg,
      title: 'Mural Coletivo',
      description: 'Leitura da Cidade e Criação de Mural no Morro da Conceição',
      fullContent: (
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
          <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
            <li>Agatha Maria Silva de Oliveira</li>
            <li>Alessandro José da Silva</li>
            <li>Ana Júlia Ribeiro de Macedo</li>
            <li>Caliel Feijó de Melo Silva</li>
            <li>Cauã Teixeira Lima</li>
            <li>Elbany Gomes dos Santos</li>
            <li>Emanuelle Karla Basílio Ferreira Silva</li>
            <li>Flávia Alessandra Almeida Araújo</li>
            <li>Ilane Ribeiro Hirata</li>
            <li>Isadora de Melo Polesi</li>
            <li>Julie Kunii</li>
            <li>Letícia Vitória Campos de Melo</li>
            <li>Lírio Amarílis Matias</li>
            <li>Lucas Ângelo Botelho</li>
            <li>Maria Eduarda Malaquias Rodrigues</li>
            <li>Maria Joana Pequeno Aureliano da Silva</li>
            <li>Samuel Victor Guedes de Queiroz</li>
            <li>Vinicius Diniz Nunes</li>
          </ul>
        </>
      )
    },
    { 
      image: coletivoSemearteImg,
      title: 'Coletivo Semearte',
      description: 'Iniciativa cultural que promove arte e educação através de ações comunitárias e workshops criativos.',
      fullContent: 'Detalhes expandidos sobre o Coletivo Semearte, sua missão, projetos realizados, impacto na comunidade, etc.' // Este texto ainda precisa ser atualizado
    },
    { 
      image: oficinaEscolinhaImg,
      title: 'Oficina Escolinha',
      description: 'Programa educacional voltado para o desenvolvimento artístico e criativo de crianças.',
      fullContent: (
        <>
          <strong>Prática na Escolinha de Artes do Recife – 2025</strong>
          <br/><br/>
          A turma de Metodologia realizou uma atividade em parceria com a Escolinha de Arte do Recife, vivenciando práticas e metodologias do ensino não formal em Artes Visuais. Os alunos conheceram a proposta pedagógica e a importância histórica da instituição, e realizaram uma visita de reconhecimento do espaço.
          <br/><br/>
          Em seguida, os alunos dividiram-se em três grupos para planejar e desenvolver oficinas destinadas às crianças atendidas pela Escolinha. A experiência destacou a sensibilização, a livre expressão e a inclusão como fundamentos do processo educativo em arte.
        </>
      )
    }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: '80px 60px',
      backgroundColor: '#ffffff'
    }}>
      {/* Grid de Arte */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {artProjects.map((project, index) => (
          <ArtTile 
            key={index}
            imageSrc={project.image}
            title={project.title}
            description={project.description}
            onClick={() => setExpandedProject(project)}
          />
        ))}
      </div>
      
      {/* Modal expandido */}
      <ExpandedModal 
        project={expandedProject}
        onClose={() => setExpandedProject(null)}
      />
    </div>
  );
};

export default ProjectsArtGrid;