import './App.css'
import Navbar from './Swich/Component/Navbar'
import ProductDetails from './Swich/Component/ProductDetails'
import Productpage from './Swich/Component/Productpage'
import Routing from './Swich/Component/Router/Routing'
import ThemeApp from './Swich/ThemeApp'
 
function App() {
  
  return (
    <>
    
     <ThemeApp/>
     <Navbar/>
      <Routing/>
      {/* <ProductDetails/> */}
    </>
  )
}

export default App
