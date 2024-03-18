import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer' 


// just for checking 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pd';
import Checkout from './checkout/checkout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* <img src="C:\Users\udayd\OneDrive\Desktop\frontend\E-commerce-react\e-commerce\src\tree.jpg" alt="" /> */}
        {/* hello how are you 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, reiciendis eos quia, optio vero doloribus officiis consectetur asperiores nostrum quas ipsa nemo cupiditate nulla corporis minima corrupti cumque libero dicta?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam consectetur asperiores quas at minima totam alias magni sit voluptatibus, cum ratione dolorem adipisci distinctio nulla nisi saepe provident perferendis animi incidunt nemo tempore veniam sapiente. Autem dolorem laboriosam, quisquam aliquid temporibus alias ut doloremque eum, aperiam beatae, quae accusamus reiciendis. Reiciendis unde quis nostrum dolorum doloremque assumenda delectus amet neque, ducimus excepturi voluptatibus consectetur? Nihil qui laborum dolorum. Dolorum nemo cum quia eaque cumque recusandae voluptas dolores maxime facilis commodi hic molestiae iste, sint vel. Maxime, eligendi. Eos cumque aperiam suscipit voluptate laudantium incidunt dolor autem facilis id! Natus, exercitationem.
        lorem10001
      </div>
      <Footer></Footer> */} 

      {/* <ProductDetails></ProductDetails> */}

      <Router>
      <Routes>
        {/* Route for the ProductDetails component */}
        <Route path="/product-details" Component={ProductDetails} />

        {/* Route for the Checkout component */}
        <Route path="/checkout" Component={Checkout} />

        {/* Default route, can be a home page or another component */}
        {/* <Route path="/" exact> */}
          {/* Your home page content goes here */}
          {/* <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> */}
        {/* </Route> */}
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
