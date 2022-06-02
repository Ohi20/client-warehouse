import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventoryitems/Inventory';
import NotFound from './Pages/NotFound';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='app px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="*" element={<NotFound></NotFound>} />
        
      </Routes>
    </div>
  );
}

export default App;
