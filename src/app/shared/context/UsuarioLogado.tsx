import { createContext, useCallback, useEffect, useState } from 'react';

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nome, setNome] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setNome('Guilherme');
    }, 3000);
  }, []);

  const handleLogout = useCallback(() => {
    console.log('logout');
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: nome, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
