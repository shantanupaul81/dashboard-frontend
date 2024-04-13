import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })
  const SubmitSignUp = async () => {
    // console.log(name,email,password);
    let result = await fetch('https://dashboard-server-uaq5.onrender.com/register', {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    result = await result.json()
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));

    if (result) {
      navigate('/')
    }

  }

  return (
    <div className='flex items-center justify-center m-20'>

      <div className='bg-white p-8 rounded shadow-md w-full max-w-xs'>
        <form className='flex flex-col space-y-4' action="">
          <h1 className='text-center uppercase text-2xl'>Register</h1>
          <input className='border p-2 rounded' type="text" placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className='border p-2 rounded' type="text" placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='border p-2 rounded' type="password" placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SubmitSignUp} className='bg-blue-600 p-2 text-white uppercase' type='button'>Sign Up</button>
          <Link className='text-center' to='/login'>Already have an account</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup


