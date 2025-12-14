import React from 'react';
import leopardoVideo from '../assets/leopardo2.webm';

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '60px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ 
        maxWidth: '1600px', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '500px'
      }}>
        {/* Conteúdo de texto */}
        <div style={{ flex: '0 0 auto', minWidth: '400px', maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '30px',
            lineHeight: '1.2',
            letterSpacing: '-2px',
            fontFamily: 'Arial, sans-serif'
          }}>
            Olá, eu sou<br />
            Caliel Feijó
          </h1>
          
          <div style={{
            fontSize: '1.2rem',
            color: '#666',
            lineHeight: '1.8',
            fontFamily: 'Lato, sans-serif',
            fontWeight: '300'
          }}>
            <p style={{ marginBottom: '20px' }}>
              Sou um <span style={{ color: '#1a1a1a', fontWeight: '400' }}>artista digital</span> e <span style={{ color: '#1a1a1a', fontWeight: '400' }}>desenvolvedor</span> apaixonado por criar experiências visuais únicas e soluções tecnológicas inovadoras.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Meu trabalho combina arte, código e design para transformar ideias em realidade digital.
            </p>
          </div>
        </div>

        {/* Vídeo do Leopardo */}
        <div style={{ 
          flex: '1 1 auto',
          minWidth: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <video 
            src={leopardoVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              width: '1500px', 
              height: 'auto',
              display: 'block',
              borderRadius: '12px'
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;