import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  // let auth = localStorage.getItem('user');

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    let data = await fetch('https://dashboard-server-uaq5.onrender.com/product');
    data = await data.json()
    setProducts(data)
  }

  const productDelete = async (id) => {
    let result = await fetch(`https://dashboard-server-uaq5.onrender.com/product/${id}`, {
      method: 'Delete'
    });
    result = await result.json()
    if (result) {
      getProduct();
    }
    console.log(id);
  }

  const SearchHandle = async (e) => {
    let data = e.target.value;
    if (data) {
      let result = await fetch(`https://dashboard-server-uaq5.onrender.com/search/${data}`);
      result = await result.json();
      if (result) {
        setProducts(result)
      }
    }else{
      getProduct()
    }

    // console.log();
  }

  return (
    <div className='text-center'>
      <h1 className='uppercase text-2xl p-4 m-4'>Product List</h1>
      <input className='p-2 h-10 w-96 m-4 border-2 border-blue-500 rounded-md' type="text" placeholder='Search Product'
        onChange={SearchHandle} />
      <ul className='flex justify-center'>
        <li className='border-2 border-blue-500 p-2 w-40'>Sr.No</li>
        <li className='border-2 border-blue-500 p-2 w-40'>Name</li>
        <li className='border-2 border-blue-500 p-2 w-40'>Price</li>
        <li className='border-2 border-blue-500 p-2 w-40'>Category</li>
        <li className='border-2 border-blue-500 p-2 w-40'>Company</li>
        <li className='border border-blue-500 p-2 w-40'>Operation</li>
      </ul>
      {
        products.length>0 ? products.map((item, index) =>
          <ul className='flex justify-center' key={item._id}>
            <li className='border-2 border-blue-500 p-2 w-40'>{index + 1}</li>
            <li className='border-2 border-blue-500 p-2 w-40'>{item.name}</li>
            <li className='border-2 border-blue-500 p-2 w-40'>₹ {item.price}</li>
            <li className='border-2 border-blue-500 p-2 w-40'>{item.category}</li>
            <li className='border-2 border-blue-500 p-2 w-40'>{item.company}</li>
            <li className='border border-blue-500 p-2 w-40'>
              <button onClick={() => productDelete(item._id)} className='bg-blue-400 rounded-md p-2'>Delete</button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>

          </ul> 
        ):
        <h1 className='text-center uppercase m-4 text-2xl text-rose-500'>Opps !No Result Found</h1>
      }
    </div>
  )
}

export default Products