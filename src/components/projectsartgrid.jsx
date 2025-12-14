import React, { useState } from 'react';

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
          height: '100%',
          backgroundImage: project.image ? `url(${project.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#e0e0e0',
          position: 'relative',
          padding: '60px'
        }}>
          {!project.image && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              opacity: 0.3,
              zIndex: 0
            }}></div>
          )}
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            color: project.image ? '#fff' : '#1a1a1a',
            textShadow: project.image ? '0 2px 10px rgba(0,0,0,0.5)' : 'none'
          }}>
            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'rgba(0,0,0,0.8)',
                color: '#fff',
                border: 'none',
                padding: '15px 20px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              ✕
            </button>
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '30px',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}>{project.title}</h2>
            <p style={{
              fontSize: '1.5rem',
              lineHeight: '1.8',
              marginBottom: '30px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
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
      image: null,
      title: 'Mural Coletivo',
      description: 'Projeto de arte urbana colaborativa que transforma espaços públicos através da criatividade coletiva.',
      fullContent: 'Aqui você pode adicionar muito mais conteúdo sobre o Mural Coletivo, incluindo detalhes do processo, participantes, localização, datas, fotos adicionais, etc.'
    },
    { 
      image: null,
      title: 'Coletivo Semearte',
      description: 'Iniciativa cultural que promove arte e educação através de ações comunitárias e workshops criativos.',
      fullContent: 'Detalhes expandidos sobre o Coletivo Semearte, sua missão, projetos realizados, impacto na comunidade, etc.'
    },
    { 
      image: null,
      title: 'Oficina Escolinha',
      description: 'Programa educacional voltado para o desenvolvimento artístico e criativo de crianças e adolescentes.',
      fullContent: 'Informações completas sobre a Oficina Escolinha, metodologia, atividades desenvolvidas, resultados alcançados, etc.'
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