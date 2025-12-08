import React, { useState } from "react";
import "../styles/header.css";

export default function Header({ title, user, onNavigate, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">{title}</h1>
      </div>

      {/* ícone tres barrinhas */}
      <button
        className="menu-icon"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        ☰
      </button>

      {/* nav  */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavigate("home")}>Home</button>
        <button onClick={() => handleNavigate("courses")}>Biblioteca</button>
        <button onClick={() => handleNavigate("profile")}>Perfil</button>

        {user ? (
          <button
            className="logout-btn"
            onClick={() => {
              setMenuOpen(false);
              onLogout();
            }}
          >
            Sair
          </button>
        ) : (
          <button onClick={() => handleNavigate("login")}>Entrar</button>
        )}
      </nav>

      {/* overlay escuro  */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
