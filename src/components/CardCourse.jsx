import React from "react";
import "../styles/cardCourse.css";

/*
  CardCourse
  Recebe:
  - item: { title, type, thumbnail, link, description, progress }
  - onRemove: função para remover o card
*/
export default function CardCourse({ item, onRemove }) {
  // Mapeamento de ícones baseado no tipo.. eu preferia usar icones do material ui, mas infelizmente
  //o enunciado especificou q era sem frameworks
  const icon =
    {
      video: "🎬",
      texto: "📄",
      imagem: "🖼️",
      link: "🔗",
    }[item.type] || "📚";

  return (
    <article className="card-course">
      <div className="card-left">{icon}</div>

      <div className="card-mid">
        {/* Thumbnail: aparece somente se existir URL */}
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={item.title} className="card-thumb" />
        ) : null}

        <h3 className="card-title">{item.title}</h3>

        {item.description && <p className="card-desc">{item.description}</p>}

        <div className="card-bottom">
          <small className="muted">{item.type}</small>
          <a
            className="card-open"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir
          </a>
        </div>

        {/* Barra de Progresso */}
        <div className="progress">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${item.progress}%` }}
            />
          </div>
          <small className="muted">{item.progress}% concluído</small>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn-danger" onClick={onRemove}>
          Remover
        </button>
      </div>
    </article>
  );
}
