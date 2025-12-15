import React from 'react';
import fotoUrl from '../assets/foto.jpg';

const AboutPage = () => {
  return (
    <div style={{
      padding: '60px 80px',
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER COM FOTO */}
        <header style={{
          marginBottom: '50px',
          paddingBottom: '30px',
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start'
        }}>
          {/* Foto */}
          <div style={{
            flex: '0 0 300px',
            position: 'relative'
          }}>
            <div style={{
              width: '300px',
              height: '400px',
              backgroundColor: '#e0e0e0',
              overflow: 'hidden'
            }}>
              <img 
                src={fotoUrl} 
                alt="Caliel Feijó"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Informacoes */}
          <div style={{ flex: '1' }}>
            <h1 style={{
              fontSize: '4rem',
              color: '#1a1a1a',
              marginBottom: '15px',
              letterSpacing: '-1px',
              fontFamily: '"Jacquard 12", serif' 
            }}>Caliel Feijó</h1>
            
            <h2 style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '20px',
              fontStyle: 'italic',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}>⚧ enby, they/them</h2>
            
            <p style={{
              fontSize: '1rem',
              color: '#666',
              lineHeight: '1.8',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300',
              textTransform: 'lowercase',
            }}>
              Fullstack Developer in Training with experience in interdisciplinary projects implementing creative educational programs in institutional and community environments. Skilled in design tools as well as web technologies including Node.js, React, Angular, and TypeScript. Currently focused on front-end development and C programming.
          </p>
          </div>
        </header>

        <div style={{ maxWidth: '900px' }}>
          {/* EXPERIENCIA */}
          <section style={{ marginBottom: '50px' }}>
            <h3 style={{
              fontSize: '1.2rem',
              color: '#1a1a1a',
              marginBottom: '25px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e0e0e0',
              letterSpacing: '1px',
              fontFamily: '"Jacquarda Bastarda 9", cursive'
            }}>Experience</h3>
            
            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, serif'
              }}>cultural intern & art educator</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>prefeitura do recife</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>may 2025 - present</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                textTransform: 'lowercase',
              }}>
                Responsible for promoting and developing cultural activities in educational institutions and local communities. Provide access to art, culture, and education through workshops, events, exhibitions, and other initiatives that enrich the lives of participants and the community. Foster creativity, learning, and social inclusion through cultural engagement.
            </p>
            </div>

            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, serif'
              }}>Museum Researcher and Educator</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Museu Espaço Ciência PE</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Feb 2025</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                marginTop: '10px'
              }}>
                Responsible for communication, research, and educational workshops. Provided guided tours for diverse audiences, fostering interest in science and technology. Conducted research to improve the museum's guided tours and educational content, contributing to the institution's mission of promoting scientific knowledge.
              </p>
            </div>

            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, serif'
              }}>Internship</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Smart SSMA Consulting</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>April 2022 - July 2022</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                marginTop: '10px'
              }}>
                Conducted research on legislation related to distance education; participated in a training course for virtual course content creators; studied technical standards and other publications related to occupational safety courses; managed and updated the virtual learning environment with developed content; performed administrative tasks and provided administrative support.
            </p>
            </div>
          </section>

          {/* EDUCACAO */}
          <section style={{ marginBottom: '50px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#1a1a1a',
              marginBottom: '25px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e0e0e0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'Arial, sans-serif'
            }}>Educacao</h3>
            
            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>Licenciatura em Artes Visuais</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>UFPE - Universidade Federal de Pernambuco</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>2023 - Presente</div>
            </div>

            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>Tecnologo em Analise e Desenvolvimento de Sistemas</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>CESAR School</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>2025 - Presente</div>
            </div>

            <div style={{
              marginBottom: '30px',
              paddingLeft: '20px',
              borderLeft: '2px solid #1a1a1a'
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#1a1a1a',
                marginBottom: '5px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>Tecnico em Seguranca do Trabalho</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>IFPE - Instituto Federal de Pernambuco</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>2018 - 2022</div>
            </div>
          </section>

          {/* HABILIDADES */}
          <section style={{ marginBottom: '50px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#1a1a1a',
              marginBottom: '25px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e0e0e0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'Arial, sans-serif'
            }}>Habilidades</h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                borderLeft: '3px solid #1a1a1a'
              }}>
                <div style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif'
                }}>Design & Arte</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '300'
                }}>Photoshop, Illustrator, Procreate</div>
              </div>
              
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                borderLeft: '3px solid #1a1a1a'
              }}>
                <div style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif'
                }}>Desenvolvimento</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '300'
                }}>HTML, CSS, JavaScript, React</div>
              </div>
              
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                borderLeft: '3px solid #1a1a1a'
              }}>
                <div style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif'
                }}>UI/UX Design</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '300'
                }}>Figma, Adobe XD, Sketch</div>
              </div>
              
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                borderLeft: '3px solid #1a1a1a'
              }}>
                <div style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif'
                }}>Outros</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '300'
                }}>Git, Node.js, Responsive Design</div>
              </div>
            </div>
          </section>

          {/* LINKS */}
          <section style={{ marginBottom: '50px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#1a1a1a',
              marginBottom: '25px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e0e0e0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'Arial, sans-serif'
            }}>Links</h3>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap',
              marginTop: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#666',
                fontSize: '0.95rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                <span style={{ color: '#1a1a1a' }}>►</span>
                <a href="https://github.com/poeisie" target="_blank" rel="noopener noreferrer" style={{
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>GitHub</a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#666',
                fontSize: '0.95rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                <span style={{ color: '#1a1a1a' }}>►</span>
                <a href="https://www.linkedin.com/in/calielfeijo/" target="_blank" rel="noopener noreferrer" style={{
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>LinkedIn</a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#666',
                fontSize: '0.95rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                <span style={{ color: '#1a1a1a' }}>►</span>
                <a href="mailto:calielfeijo@gmail.com" style={{
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>calielfeijo@gmail.com</a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#666',
                fontSize: '0.95rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                <span style={{ color: '#1a1a1a' }}>►</span>
                <a href="tel:+5581981654408" style={{
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>+55 (81) 98165-4408</a>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;