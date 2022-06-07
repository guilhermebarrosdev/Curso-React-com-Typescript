import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const counterRef = useRef({ count: 0 });

  return (
    <>
      <h1>Dashboard</h1>
      <p>Contador: {counterRef.current.count}</p>
      <button onClick={() => counterRef.current.count++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current.count++)}>
        log
      </button>
      <Link to="/entrar">Entrar</Link>
    </>
  );
};
