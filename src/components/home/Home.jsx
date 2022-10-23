import React from 'react'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Price from './price/Price'
import Products from './products/Products'
import Testimonial from './testimonial/Testimonial'
import TopProduct from './topproduct/TopProduct'

function Home() {
  return (
    <>
      <Hero />
      <Card />
      <Products />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home