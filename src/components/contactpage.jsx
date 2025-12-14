import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! (Em desenvolvimento)');
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '60px 40px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#1a1a1a',
            marginBottom: '15px',
            letterSpacing: '-1px',
            fontFamily: 'Arial, sans-serif'
          }}>Entre em Contato</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: '1.6',
            fontFamily: 'Lato, sans-serif',
            fontWeight: '300'
          }}>
            Tem algum projeto em mente ou quer trocar uma ideia? Manda uma mensagem!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#1a1a1a',
              marginBottom: '8px',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}>Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                color: '#1a1a1a',
                fontSize: '1rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#1a1a1a',
              marginBottom: '8px',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                color: '#1a1a1a',
                fontSize: '1rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Mensagem */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              color: '#1a1a1a',
              marginBottom: '8px',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}>Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                color: '#1a1a1a',
                fontSize: '1rem',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                transition: 'border-color 0.3s ease',
                resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1a1a1a';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Redes Sociais */}
        <div style={{
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid #e0e0e0'
        }}>
          <p style={{
            color: '#666',
            marginBottom: '15px',
            fontSize: '0.95rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: '300'
          }}>
            Ou me encontre nas redes:
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:caliel@example.com"
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              ► Email
            </a>
            <a 
              href="https://github.com/calielfeijo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              ► GitHub
            </a>
            <a 
              href="https://linkedin.com/in/calielfeijo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              ► LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;