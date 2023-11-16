import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './routes/SignIn/SignIn.jsx'
import SignUp from './routes/SignUp/SignUp.jsx'
import Home from './routes/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {path:"/", element:<Home />},
      {path:"/signIn", element: <SignIn />},
      {path:"/signUp", element: <SignUp />}
   ]
  }
  ])
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
