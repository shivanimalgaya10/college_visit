import React from 'react'
import Hero from '../components/Hero'
import SliderComponent from '../components/Slider'
import UniversityCards from '../components/UniversityCards'
import PopupForm from './PopupForm'
import StateColleges from '../components/TopTen'

const Home = () => {
  return (
    <>
    <Hero/>
   <SliderComponent/>
   <UniversityCards/>
  <PopupForm/>
  <StateColleges/>
    </>
  )
}

export default Home
