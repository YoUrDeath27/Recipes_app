import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';

import Root from "./routes/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        // children: [
        //   { index: true, element: <Index /> },
        //   {
        //     path: "contacts/:contactId",
        //     element: <Contact />,
        //     loader: contactLoader,
        //     action: contactAction,
        //   },
        //   {
        //     path: "contacts/:contactId/edit",
        //     element: <EditContact />,
        //     loader: contactLoader,
        //     action: editAction,
        //   },
        //   {
        //     path: "contacts/:contactId/destroy",
        //     action: destroyAction,
        //     errorElement: <div>Oops! There was an error.</div>,
        //   },
        // ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
