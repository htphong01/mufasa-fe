import initWeb3Modal from './config/wallet-connect';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { userRoutes } from './routes';
import { ThemeProvider } from 'styled-components';
import themeConfig from './theme/themeConfig';

const router = createBrowserRouter(userRoutes);

initWeb3Modal();

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
