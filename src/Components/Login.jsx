import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    const auth= localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })


  const LoginButton = async () => {
    // console.log(email,password);
    let result = await fetch('https://dashboard-server-uaq5.onrender.com/login', {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',

      },
    })

    result = await result.json()
    console.log(result);
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/')
    } else {
      alert("Please enter correct Email/Password !!")
    }
  }


  return (
    <div className='flex items-center justify-center m-20'>

      <div className='bg-white p-8 rounded shadow-md w-full max-w-xs'>
        <form className='flex flex-col space-y-4' action="">
          <h1 className='text-center uppercase text-2xl'>Login</h1>
          <input className='border p-2 rounded' type="text" placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='border p-2 rounded' type="password" placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={LoginButton} className='bg-blue-600 p-2 text-white uppercase' type='button'>Login</button>
          <Link className='text-center' to='/signup'>Don't Have any Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login