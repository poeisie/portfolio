import React from 'react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        backgroundColor: '#f5f5f5',
        border: `1px solid ${isHovered ? '#1a1a1a' : '#e0e0e0'}`,
        borderRadius: '8px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        minHeight: '280px',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.1)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#1a1a1a',
          marginBottom: '15px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>{title}</h3>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '20px',
          fontFamily: 'Lato, sans-serif',
          fontWeight: '300'
        }}>{description}</p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px'
        }}>
          {technologies.map((tech, index) => (
            <span key={index} style={{
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              padding: '5px 12px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              border: '1px solid #e0e0e0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}>{tech}</span>
          ))}
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '15px',
        paddingTop: '20px',
        borderTop: '1px solid #e0e0e0'
      }}>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease, transform 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#1a1a1a';
              e.target.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            GitHub →
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease, transform 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#1a1a1a';
              e.target.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsDevGrid = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Site de portfolio responsivo com design moderno e animações suaves. Desenvolvido com React e CSS Grid.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/usuario/portfolio',
      liveLink: 'https://portfolio.com'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Dashboard administrativo para e-commerce com gráficos interativos e gerenciamento de produtos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      githubLink: 'https://github.com/usuario/ecommerce-dashboard',
      liveLink: 'https://demo.com'
    },
    {
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, filtros e categorias personalizadas.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      githubLink: 'https://github.com/usuario/task-manager',
      liveLink: null
    },
    {
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com integração de API externa e geolocalização automática.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'API'],
      githubLink: 'https://github.com/usuario/weather-app',
      liveLink: 'https://weather-demo.com'
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog com sistema de posts, comentários e autenticação de usuários.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com/usuario/blog-platform',
      liveLink: null
    },
    {
      title: 'Chat Application',
      description: 'Aplicativo de chat em tempo real com salas privadas e notificações push.',
      technologies: ['React', 'Socket.io', 'Node.js'],
      githubLink: 'https://github.com/usuario/chat-app',
      liveLink: 'https://chat-demo.com'
    }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: '60px 80px',
      backgroundColor: '#ffffff'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 50px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#1a1a1a',
          marginBottom: '15px',
          letterSpacing: '-1px',
          fontFamily: 'Arial, sans-serif'
        }}>Projetos de Desenvolvimento</h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          maxWidth: '600px',
          fontFamily: 'Lato, sans-serif',
          fontWeight: '300'
        }}>
          Uma coleção dos meus projetos de desenvolvimento web, aplicações e experimentos com código.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDevGrid;