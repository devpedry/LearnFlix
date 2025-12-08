import React, { useEffect, useState } from "react";
import CardCourse from "../components/CardCourse";
import mockCourses from "../data/mockCourses";

/*
  Courses
  - lista mock inicial
  - permite adicionar novo material com thumbnail opcional
  - persistência em localStorage
*/

const STORAGE_KEY = "lf_courses_v1";

export default function Courses({ user }) {
  const [courses, setCourses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockCourses;
    } catch {
      return mockCourses;
    }
  });

  // inputs do formulário (inclui thumb)
  const [title, setTitle] = useState("");
  const [type, setType] = useState("video");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [thumb, setThumb] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const handleAdd = (e) => {
    e.preventDefault();
    setError("");

    if (!title || !link) {
      setError("Título e URL são obrigatórios.");
      return;
    }

    const novo = {
      id: Date.now(),
      title,
      type,
      thumbnail: thumb,
      link,
      description: desc,
      progress: 0,
      owner: user?.email || "anônimo",
    };

    setCourses([novo, ...courses]);
    setTitle("");
    setLink("");
    setDesc("");
    setThumb("");
    setType("video");
  };

  const handleRemove = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <section className="card-panel">
      <h2>Biblioteca</h2>

      <form className="form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Título do material"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="video">Vídeo</option>
          <option value="texto">Texto</option>
          <option value="imagem">Imagem</option>
          <option value="link">Link</option>
        </select>

        <input
          type="url"
          placeholder="URL (https://...)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <input
          type="url"
          placeholder="Thumbnail (opcional - URL da imagem)"
          value={thumb}
          onChange={(e) => setThumb(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descrição (opcional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {error && <div className="alert">{error}</div>}

        <button type="submit" className="primary">
          Adicionar Material
        </button>
      </form>

      <div style={{ marginTop: 18 }}>
        {courses.length === 0 ? (
          <p className="muted">Nenhum material disponível.</p>
        ) : (
          courses.map((c) => (
            <CardCourse
              key={c.id}
              item={{
                title: c.title,
                type: c.type,
                thumbnail: c.thumbnail,
                link: c.link,
                description: c.description,
                progress: c.progress,
              }}
              onRemove={() => handleRemove(c.id)}
            />
          ))
        )}
      </div>
    </section>
  );
}
