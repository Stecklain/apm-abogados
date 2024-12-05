import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

export const routes = {
  HOME: '/',
};

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: (
        <Home />
    ),
  }
]);
