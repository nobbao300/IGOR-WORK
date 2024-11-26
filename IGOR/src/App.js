import React from "react";
import Header from "./components/Header";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const galleryData = [
    { id: 1, title: "Animais", image: "../IMG/animais.jpg" },
    { id: 2, title: "Arquitetura", image: "../IMG/arquitetura.jpg" },
    { id: 3, title: "Cidades", image: "../IMG/cidade.jpg" },
    { id: 4, title: "Decorações", image: "../IMG/decoracao.jpg" },
    { id: 5, title: "Esportes", image: "../IMG/esportes.jpg" },
    { id: 6, title: "Natureza", image: "../IMG/natureza.jpg" },
    { id: 7, title: "Paisagem", image: "../IMG/paisagem.jpg" },
    { id: 8, title: "Pessoas", image: "../IMG/pessoas.jpg" },
    { id: 9, title: "Refeições", image: "../IMG/refeicoes.jpg" },
  ];

  return (
    <div>
      <Header />
      <main>
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}

export default App;
