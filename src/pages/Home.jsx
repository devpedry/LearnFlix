export default function Home({ user, onNavigate }) {
  const nome = user?.email ? user.email.split("@")[0] : "aluno";
  return (
    <section className="card-panel">
      <h2>Olá, {nome}! Bem vindo ao LearnFlix</h2>
      <p>
        Aqui você pode guardar materiais de estudo (vídeo, texto, imagem, link)
        e acompanhar seu progresso.
      </p>

      <div style={{ marginTop: 12 }}>
        <button className="primary" onClick={() => onNavigate("courses")}>
          Ir para Biblioteca
        </button>
      </div>
    </section>
  );
}
