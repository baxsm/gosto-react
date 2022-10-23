import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Home from '../Home'

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
      ],
    },
  
  ]);
  

function Pages() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Pages