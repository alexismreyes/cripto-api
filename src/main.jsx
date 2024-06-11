import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./components/404.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import Home from "./components/Home.jsx";
import CriptoPage from "./components/cripto/CriptoPage.jsx";
import Perfil from "./components/usuarios/Perfil.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import Login from "./components/usuarios/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":cryptoid" element={<CriptoPage />} />
        </Route>

        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
