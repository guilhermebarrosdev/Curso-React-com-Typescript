import { AppRoutes } from './app/routes';
import { UsuarioLogadoProvider } from './app/shared/context';

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <AppRoutes />;
    </UsuarioLogadoProvider>
  );
};
