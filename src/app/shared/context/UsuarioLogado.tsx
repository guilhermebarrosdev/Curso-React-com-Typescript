import { createContext, useCallback } from 'react';

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
  const handleLogout = useCallback(() => {
    console.log('logout');
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: 'Guilherme', logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
