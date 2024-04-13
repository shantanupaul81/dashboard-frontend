import React, { useState } from 'react'

const AddProduct = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [error, setError] = useState(false);



  const ProductSubmit = async () => {

    if(!name || !price || !category || !company){
      setError(true)
      return false
    }
    const userid = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('https://dashboard-server-uaq5.onrender.com/addproduct', {
      method: 'post',
      body: JSON.stringify({ name, price, category, userid, company }),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    result = await result.json()
    console.log(result);
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
          {error && !name && <span className='text-red-500'>Enter Valid Name !</span>}
          <input className='border p-2 rounded' type="text" placeholder='Enter Product Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
            {error && !price && <span className='text-red-500'>Enter Valid Price !</span>}

          <input className='border p-2 rounded' type="text" placeholder='Enter Product Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {error && !category && <span className='text-red-500'>Enter Valid category !</span>}

          <input className='border p-2 rounded' type="text" placeholder='Enter Product Company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
            {error && !company && <span className='text-red-500'>Enter Valid Company !</span>}

          <button onClick={ProductSubmit} className='bg-blue-600 p-2 text-white uppercase' type='button'>Add Product</button>
        </form>
      </div>
    </div>

  )
}

export default AddProduct