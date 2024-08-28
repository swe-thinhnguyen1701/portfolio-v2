import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx"
import Resume from "./pages/Resume.jsx"
import Project from "./pages/Project.jsx"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
      {
        path: "/Projects",
        element: <Project />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
