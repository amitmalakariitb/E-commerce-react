
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyCart from "./Components/AddtoCart/CartPage";



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
