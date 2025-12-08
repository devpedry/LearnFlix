import React, { useEffect, useState } from "react";
import mockCourses from "../data/mockCourses";

/*
  Profile: mostra info do usuário e lista de cursos matriculados
  Para simplicicar, usamos os cursos do mock + os adicionados (pegamo do localStorage).
*/

const STORAGE_KEY = "lf_courses_v1";

export default function Profile({ user }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      const stored =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockCourses;
      // filtrar apenas cursos do usuári ou todos
      const mine = stored.filter((c) => !c.owner || c.owner === user?.email);
      setCourses(mine);
    } catch {
      setCourses(mockCourses);
    }
  }, [user]);

  return (
    <section className="card-panel profile-panel">
      <h2>Perfil</h2>
      <div className="profile-row">
        <div className="avatar">
          <img
            src={
              user?.avatar ||
              "https://preview.redd.it/how-well-known-is-dante-across-the-world-v0-dqtwi18nog5c1.jpg?auto=webp&s=117053126356b0a96776d2fa2bb14e336966b254"
            } // aqui ve se tem img no usuario, se n tiver, usa placeholder
            alt="Foto do usuário"
            className="profile-avatar"
          />
        </div>
        <div>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Nome:</strong>{" "}
            {user?.email ? user.email.split("@")[0] : "Aluno"}
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: 12 }}>Meus cursos</h3>
      {courses.length === 0 ? (
        <p className="muted">Você não tem cursos cadastrados.</p>
      ) : (
        courses.map((c) => (
          <div key={c.id} className="profile-course">
            <div>
              <strong>{c.title}</strong>
              <div className="muted">
                {c.type} • {c.progress}%
              </div>
            </div>
            <div className="small-progress">
              <div
                className="progress-bar-small"
                style={{ width: `${c.progress}%` }}
              />
            </div>
          </div>
        ))
      )}
    </section>
  );
}
