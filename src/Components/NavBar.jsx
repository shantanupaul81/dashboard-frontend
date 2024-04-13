import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../Image/logoo.png"
const NavBar = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup')

    }
    return (
        <div className='relative'>
           <Link to='/'><img src={logo} alt="logo" className='w-12 absolute'/></Link>
            {auth ?<ul className='flex flex-wrap justify-start gap-4 uppercase bg-slate-800 p-4 text-white px-14'>
                <li><Link to='/'>Product</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                {/* <li><Link to='/update/:id'>Update Product</Link></li> */}
                <li><Link to='/profile'>{JSON.parse(auth).name}</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout</Link> </li>
            </ul> :
                <ul className='flex justify-end gap-4 uppercase bg-slate-800 p-4 text-white'>
                    <li> <Link to='/signup'>Sign up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>}

        </div>
    )
}

export default NavBar;