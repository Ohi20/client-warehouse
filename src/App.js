import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventoryitems/Inventory';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        
      </Routes>
    </div>
  );
}

export default App;
