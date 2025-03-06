import './App.css'
import Pagination from './assets/Work/Pagination'
import Navbar from './Swich/Component/Navbar'
import ProductDetails from './Swich/Component/ProductDetails'
import Productpage from './Swich/Component/Productpage'
import Routing from './Swich/Component/Router/Routing'
import ThemeApp from './Swich/ThemeApp'
 
function App() {
  
  return (
    <>
    
     {/* <ThemeApp/> */}
     <Navbar/>
      <Routing/>
      {/* <ProductDetails/> */}
      {/* <Pagination/> */}
    </>
  )
}

export default App
