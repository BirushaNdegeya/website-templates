import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router';
import './css/index.css';
import Layout from './layouts/layout';
import App from './components';
import Hero from './components/hero';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root')!);
root.render(
  <RouterProvider router={router} />
);