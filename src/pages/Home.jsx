import React from 'react'
import Banner from '../components/Banner'
import CategoryComponent from '../components/CategoryComponent'
import Testimonial from '../components/Testimonial'
import SecondFooterComponent from '../components/SecondFooterComponent'
import Sponsers from '../components/Sponsers'
import ExclusiveComponent from '../components/ExclusiveComponent'
import FeaturedProduct from '../components/FeaturedProduct'

function Home() {
  return (
    <div>
      <Banner/>
      <CategoryComponent/>
      <ExclusiveComponent/>
      <FeaturedProduct/>
      <Testimonial/>
      <Sponsers/>
      <SecondFooterComponent/>
    </div>
  )
}

export default Home