import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/task",
    element: <TaskPage/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
