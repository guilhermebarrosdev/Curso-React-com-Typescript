import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {
  const counterRef = useRef(0);

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <>
      <h1>Dashboard</h1>
      <p>{nomeDoUsuario}</p>
      <p>Contador: {counterRef.current}</p>
      <button onClick={() => counterRef.current++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current++)}>Log</button>
      <button onClick={logout}>Logout</button>
      <Link to="/entrar">Entrar</Link>
    </>
  );
};
