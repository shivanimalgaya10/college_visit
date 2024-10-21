
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SliderComponent from './components/Slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StateColleges from './components/TopTen';
import ExploreCourses from './components/ExploreCourses';
import Footer from './components/Footer';
import PopupForm from './pages/PopupForm';
import UniversityCards from './components/UniversityCards';
import Navbarr from './components/Navbar/Navbarr';
import { Outlet, BrowserRouter as Router } from 'react-router-dom'; 


function App() {

   
  return (
   

   <Router>
    <>
    <Navbarr/>
    <Outlet/>

    <Hero/>
   <SliderComponent/>
   <UniversityCards/>
  <PopupForm/>
  <StateColleges/>
   <Footer/>
    </>
   </Router>

  
  
   
   
  )
}

export default App
