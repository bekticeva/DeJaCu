import { BrowserRouter, Routes, Route, Link } from "react-router";
import {AuthContext} from "./AuthContext"
import App from "./App";
import AboutPage from "./components/About";
import ProfilePage from "./components/Profile";
import SignUpForm from "./components/Login";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function AppRouter() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }
    function logout(name) {
    setUser({ name: "", isAuth: false });
  }

  return (
    <BrowserRouter>

      <AuthContext.Provider value={{ user, login, logout }}>
        
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<SignUpForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        
      </AuthContext.Provider>

      <div>FOOTER</div>
    </BrowserRouter>
  );
}
