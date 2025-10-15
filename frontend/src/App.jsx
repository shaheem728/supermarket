import BrandsSection from "./components/BrandsSection"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Recommended from "./components/Recommended"


function App() {


  return (
   <>
   <NavBar/>
   <div className="px-4 md:px-16 bg-[#0000000e]">
   <Home/>
   <Recommended/>
   <BrandsSection/>
   <Categories/>
   </div>
   <Footer/>
  
   </>
  )
}

export default App
