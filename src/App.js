import React, { useEffect, useState } from "react";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import app from "./ayudas/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
      setUsuarioGlobal(usuario);
    } else {
      setUsuarioGlobal(null);
    }
  });

  return <>{usuarioGlobal ? <Home /> : <Login />}</>;
}

export default App;
