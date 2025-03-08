import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router';
import './css/index.css';
import Layout from './layouts/layout';
import Templates from './components/pages/templates';
import Hero from './components/hero';
import { basename } from 'path';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {

        path: "/",
        element: <Hero />
      },
      {
        path: "/templates",
        element: <Templates />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root')!);
root.render(
  <RouterProvider router={router} />
);