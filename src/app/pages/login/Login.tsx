import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (window.confirm('Você é homem?')) {
      console.log('Homem');
    } else {
      console.log('Mulher');
    }
  }, []);

  useEffect(() => {
    console.log('Email:', email);
  }, [email]);

  useEffect(() => {
    console.log('Password:', password);
  }, [password]);

  const handleEntrar = () => {
    console.log(email, password);
  };

  return (
    <>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </>
  );
};
