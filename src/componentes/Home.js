import React from 'react';

import app from '../ayudas/credenciales';
import { getAuth, signOut } from "firebase/auth";
import { Container, Button } from 'react-bootstrap';
const auth = getAuth(app);

const Home = () => {
  return (
    <Container>
        <h1>Has iniciado sesión</h1>
        <Button variant="danger" onClick={()=> signOut(auth) }>
            Cerrar sesión
        </Button>
    </Container>
  )
}

export default Home