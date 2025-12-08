import React, { useState } from "react";

/*
  Login simples:
  - valida email (contém @ e domínio)
  - senha com min 4 caracteres
  - ao entrar, chama onLogin({ email, name? })
  - como é pra ser mais simples no começo, ele só ta validando
  - se possi algo após o @, ao invez de validar o dominio como gmail e etc
*/
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const validarEmail = (email) => {
    // validacão básica: fulano@algumacoisa.com
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha email e senha.");
      return;
    }
    if (!validarEmail(email)) {
      setErro("Email inválido.");
      return;
    }
    if (senha.length < 4) {
      setErro("Senha deve ter pelo menos 4 caracteres.");
      return;
    }

    // login fake: salva só o email
    onLogin({ email });
  };

  return (
    <section className="card-panel login-panel">
      <h2>Entrar no LearnFlix</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha (mín. 4 chars)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <div className="alert">{erro}</div>}

        <button type="submit" className="primary">
          Entrar
        </button>
      </form>
    </section>
  );
}
