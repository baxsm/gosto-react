import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import CheckOut from '../../checkout/CheckOut';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Details from '../details/Details';
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
        {
          path: '/cart/:id',
          element: <Details />
        }
      ],
    },
    {
      path: '/checkout',
      element: <CheckOut />
    }
  ]);
  

function Pages() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Pages