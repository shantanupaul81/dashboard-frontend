import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProducts = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const param = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    let result = await fetch(`https://dashboard-server-uaq5.onrender.com/product/${param.id}`)
    result = await result.json()
    // console.log(result);
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const UpdatePro =async () => {
    console.log(name, price, category, company);
    let result = await fetch(`https://dashboard-server-uaq5.onrender.com/product/${param.id}`,{
      method:"Put",
      body:JSON.stringify({name, price, category, company}),
      headers:{
        'Content-Type': 'application/json',

      }
    })
    result = await result.json();
    console.log(result);
    navigate('/')

  }
  return (

    <div className='flex items-center justify-center m-20'>

      <div className='bg-white p-8 rounded shadow-md w-full max-w-xs'>
        <form className='flex flex-col space-y-4' action="">
          <h1 className='text-center uppercase text-2xl'>Add Product</h1>
          <input className='border p-2 rounded' type="text" placeholder='Enter Product Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className='border p-2 rounded' type="text" placeholder='Enter Product Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input className='border p-2 rounded' type="text" placeholder='Enter Product Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input className='border p-2 rounded' type="text" placeholder='Enter Product Company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <button onClick={UpdatePro} className='bg-blue-600 p-2 text-white uppercase' type='button'>Update Product</button>
        </form>
      </div>
    </div>)
}

export default UpdateProducts