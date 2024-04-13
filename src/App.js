import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import AddProduct from './Components/AddProduct'
import UpdateProducts from './Components/UpdateProducts'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import Nopage from './Components/Nopage'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PrivetCom from './Components/PrivetCom'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivetCom/>}>
          <Route path='/' element={<Products />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProducts />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App