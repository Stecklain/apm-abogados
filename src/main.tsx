import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { queryClient } from './react-query/query-client.ts';
import { router } from './router.tsx';
import { createMuiTheme } from './styles/mui-theme.ts';
import './styles/tailwind.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import Header from '../src/pages/Header.tsx';
import AreasDePractica from '../src/pages/AreasDePractica.tsx';
import Footer from './pages/Footer.tsx';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
const theme = createMuiTheme(rootElement);

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
              <Header />
              <AreasDePractica />
              
              <RouterProvider router={router} />
              <Footer/>
            </SnackbarProvider>
          </QueryClientProvider>
        </LocalizationProvider>
      </StrictMode>
    </ThemeProvider>
  </StyledEngineProvider>
);
