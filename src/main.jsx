import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import DetailTodo from './components/DetailTodo.jsx';
import NewTodo from './components/NewTodo.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/detailTodo/:id',
    element: <DetailTodo/>,
  },
  {
    path: '/newTodo',
    element: <NewTodo/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();