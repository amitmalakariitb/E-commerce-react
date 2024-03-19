// import Navbar from "./components/Navigation/navbar";
import MyCart from "./components/AddtoCart/CartPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cartpage" element={<MyCart />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
