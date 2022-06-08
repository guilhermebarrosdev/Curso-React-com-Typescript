import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { UsuarioLogadoContext } from '../../shared/context';

export const Dashboard = () => {
  const counterRef = useRef(0);

  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  return (
    <>
      <h1>Dashboard</h1>
      <p>{usuarioLogadoContext.nomeDoUsuario}</p>
      <p>Contador: {counterRef.current}</p>
      <button onClick={() => counterRef.current++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current++)}>log</button>
      <Link to="/entrar">Entrar</Link>
    </>
  );
};
