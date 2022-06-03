import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventoryitems/Inventory';
import Login from './Pages/Login/Login';
import Requireauth from './Pages/Login/Requireauth';
import Signup from './Pages/Login/Signup';
import NotFound from './Pages/NotFound';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='app px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/inventory" element={<Requireauth><Inventory></Inventory></Requireauth>} />

        <Route path="/blogs" element={<Blogs></Blogs>} />

        <Route path="/login" element={<Login></Login>} />

        <Route path="/signup" element={<Signup></Signup>} />
        
        <Route path="*" element={<NotFound></NotFound>} />
        
      </Routes>
    </div>
  );
}

export default App;
