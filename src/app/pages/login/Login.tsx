import { useCallback, useMemo, useRef, useState } from 'react';

import { ButtonLogin } from './components/ButtonLogin';
import { InputLogin } from './components/InputLogin';

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

        <InputLogin
          type="email"
          label="Email"
          value={email}
          ref={inputPasswordRef}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          type="password"
          label="Password"
          value={password}
          ref={inputPasswordRef}
          onChange={(newValue) => setPassword(newValue)}
        />

        {/* <button type="button" onClick={handleEntrar}>
          Entrar
        </button> */}
        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>
        <ButtonLogin type="button" onClick={handleEntrar}>
          Cadastrar-se
        </ButtonLogin>
      </form>
    </div>
  );
};
