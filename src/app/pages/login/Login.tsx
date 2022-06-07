import { useCallback, useMemo, useRef, useState } from 'react';

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLength = useMemo(() => {
    console.log('executou');
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '10rem',
          margin: '10px',
        }}
      >
        <p>Quantidade de caracteres do email: {emailLength}</p>

        <label>
          <span>Email</span>
          <input
            ref={inputPasswordRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter' && inputPasswordRef.current?.focus()
            }
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            ref={inputPasswordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
