import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";

//stylos
import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/login.css";
import "./styles/home.css";
import "./styles/courses.css";
import "./styles/profile.css";
import "./styles/cardCourse.css";
import "./styles/button.css";

/*
  App principal: controle de rota simples (state) e usuário.
  Guarda usuário no localStorage para manter sessão durante apresentação.. Fiz varios testes
  e se manteve bem nesse estilo
*/

export default function App() {
  const [route, setRoute] = useState("login"); // 'login' | 'home' | 'courses' | 'profile'
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lf_user")) || null;
    } catch {
      return null;
    }
  });

  // quando usuário muda, guarda no localStorage e ajusta rota
  useEffect(() => {
    if (user) {
      localStorage.setItem("lf_user", JSON.stringify(user));
      setRoute("home");
    } else {
      localStorage.removeItem("lf_user");
      setRoute("login");
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    setRoute("login");
  };

  return (
    <div className="app-root">
      <Header
        title="LearnFlix"
        user={user}
        onNavigate={setRoute}
        onLogout={handleLogout}
      />

      <main className="main">
        {route === "login" && <Login onLogin={setUser} />}
        {route === "home" && <Home user={user} onNavigate={setRoute} />}
        {route === "courses" && <Courses user={user} />}
        {route === "profile" && <Profile user={user} />}
      </main>

      <Footer />
    </div>
  );
}
