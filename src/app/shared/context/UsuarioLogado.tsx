import { createContext } from 'react';

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Guilherme' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
