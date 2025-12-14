import React from "react";
import leopardoVideo from "../assets/leopardo2.webm";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "60px",
        backgroundColor: "#ffffff",
      }}
    >
      {" "}
      <div
        style={{
          maxWidth: "1600px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "500px",
        }}
      >
        {/* Conteúdo de texto */}{" "}
        <div style={{ flex: "0 0 auto", minWidth: "400px", maxWidth: "800px" }}>
          {/* Título Principal */}{" "}
          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              marginBottom: "30px",
              lineHeight: "1.2",
              letterSpacing: "-2px",
              fontFamily: "Jacquard 12, serif", // Fonte personalizada
            }}
          >
            Caliel Feijó{" "}
          </h1>
          {/* Subtexto */}{" "}
          <div
            style={{
              fontSize: "1.2rem",
              color: "#666",
              lineHeight: "1.8",
              fontFamily: "Jacquarda Bastarda 9, cursive", // Fonte personalizada
              fontWeight: "300",
            }}
          >
            {" "}
            <p style={{ marginBottom: "20px" }}>
              Visual Artist and Fullstack Developer from Recife, PE.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        {/* Vídeo do Leopardo */}{" "}
        <div
          style={{
            flex: "0 0 1200px",
            minWidth: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <video
            src={leopardoVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "1500px",
              height: "auto",
              display: "block",
              borderRadius: "0px",
            }}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default HomePage;
