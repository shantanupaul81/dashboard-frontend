import React from 'react'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const auth = localStorage.getItem('user')
  const navigate=useNavigate();

const logout=()=>{
  localStorage.clear();
  navigate('/login')
}
  return (
    <div className='text-center uppercase text-2xl p-4'>
      <h1>{JSON.parse(auth).name}</h1>
      <h1>{JSON.parse(auth).email}</h1>
      <button onClick={logout} type='button' className='bg-blue-500 text-white p-2 rounded-md m-2 uppercase'>Logout</button>
    </div>
  )
}

export default Profile