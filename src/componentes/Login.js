import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

import app from "../ayudas/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(app);
let estaRegistrado = false;

async function submitHandler(e) {
  e.preventDefault();
  const email = e.target.formBasicEmail.value;
  const password = e.target.formBasicPassword.value;
  if (estaRegistrado) {
    await createUserWithEmailAndPassword(auth, email, password);
  } else {
    await signInWithEmailAndPassword(auth, email, password);
  }
  
}

const Login = () => {
  const [estaRegistrado, setEstaRegistrado] = useState(false);
  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrado ? "Registrar" : "Iniciar sesión"}</h1>
        <Form onSubmit={submitHandler} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {estaRegistrado ? "Registrar" : "Iniciar sesión"}
          </Button>
        </Form>
        <Button className="col-3 danger" type="submit">
            Accedder con google
          </Button>
        <Button className ="col-3" variant="alert" onClick= {()=> setEstaRegistrado(!estaRegistrado)} >
          {estaRegistrado
            ? "Ya tienes cuenta? Inicia sesión"
            : "No tienes cuenta, Registrate"}
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
