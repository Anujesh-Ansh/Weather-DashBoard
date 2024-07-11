import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignInPage from './auth/sign-in/SignInPage.jsx'
import HomePage from './home/HomePage.jsx'
import DashBoard from './dashboard/DashBoard.jsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/dashboard',
        element: <DashBoard/>
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
      <RouterProvider router={router}/>
  </React.StrictMode>,
)