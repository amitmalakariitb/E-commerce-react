// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// just for checking 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/product_details/pd';
import Checkout from './components/checkout/checkout';
import Confirmation from './components/confirmation/confirmation';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/product-details" Component={ProductDetails} />
          <Route path="/checkout" Component={Checkout} />
          <Route path='/confirmation' Component={Confirmation}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
