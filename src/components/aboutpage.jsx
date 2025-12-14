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
          borderBottom: '2px solid #e0e0e0',
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

          {/* Informações */}
          <div style={{ flex: '1' }}>
            <h1 style={{
              fontSize: '3rem',
              color: '#1a1a1a',
              marginBottom: '15px',
              letterSpacing: '-1px',
              fontFamily: 'Arial, sans-serif'
            }}>Caliel Feijó</h1>
            <h2 style={{
              fontSize: '1.3rem',
              color: '#666',
              marginBottom: '20px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}>Educador de Arte & Desenvolvedor</h2>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              lineHeight: '1.8',
              fontFamily: 'Lato, sans-serif',
              fontWeight: '300'
            }}>
              Educador cultural e artista com experiência em promover e desenvolver atividades culturais em instituições educacionais e comunidades. Apaixonado por oferecer acesso à arte, cultura e educação através de workshops, eventos e iniciativas que enriquecem vidas e promovem inclusão social através da criatividade.
            </p>
          </div>
        </header>

        <div style={{ maxWidth: '900px' }}>
          {/* EXPERIÊNCIA */}
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
            }}>Experiência</h3>
            
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
              }}>Estagiário Cultural & Educador de Arte</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Prefeitura do Recife</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#999',
                marginBottom: '10px',
                fontStyle: 'italic',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Presente</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>
                Promoção e desenvolvimento de atividades culturais em instituições educacionais e comunidades. Oferecimento de acesso à arte, cultura e educação através de workshops, eventos, exposições e outras iniciativas que enriquecem as vidas dos participantes e da comunidade. Fomento à criatividade, aprendizado e inclusão social através da cultura.
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
                fontFamily: 'Arial, sans-serif'
              }}>Pesquisador e Educador de Museu</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Museu Espaço Ciência PE</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                marginTop: '10px'
              }}>
                Comunicação, pesquisa e oficinas educacionais.
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
                fontFamily: 'Arial, sans-serif'
              }}>Estágio</div>
              <div style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '5px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}>Smart SSMA Consulting</div>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                marginTop: '10px'
              }}>
                Estudo de legislação aplicada ao ensino a distância, participação no curso de formação de criadores de conteúdo para cursos virtuais, estudo de normas técnicas e outras publicações relacionadas a cursos de segurança ocupacional, alimentação do ambiente virtual de aprendizagem com o conteúdo elaborado, atividades administrativas e suporte administrativo.
              </p>
            </div>
          </section>

          {/* EDUCAÇÃO */}
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
            }}>Educação</h3>
            
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
              }}>Tecnólogo em Análise e Desenvolvimento de Sistemas</div>
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
              }}>Técnico em Segurança do Trabalho</div>
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
                <a href="https://github.com/calielfeijo" target="_blank" rel="noopener noreferrer" style={{
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
                <a href="https://linkedin.com/in/calielfeijo" target="_blank" rel="noopener noreferrer" style={{
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>LinkedIn</a>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;