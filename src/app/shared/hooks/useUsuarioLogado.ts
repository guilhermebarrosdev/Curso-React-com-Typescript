import { useContext } from 'react';
import { UsuarioLogadoContext } from './../context/UsuarioLogado';

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
};
