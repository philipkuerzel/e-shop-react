import React, { useContext, useEffect, useState } from 'react'
import './shop.css'
import { Link } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider'
import SearchFunction from '../../../components/searchFunction/SearchFunction'
import TabBar from '../../../components/tabBar/TabBar'

const Shop = () => {
  const { products, categories } = useContext(mainContext)
  const [popular, setPopular] = useState([])
  
  // sort products by popularity using sort method to sort by rating (highest to lowest)

  useEffect(() => {
    const sortProducts = [...products].sort((a, b) => {
      return b.rating - a.rating
    })
    setPopular(sortProducts)
    console.log(sortProducts);
  }, [products])

  return (
    <>
    <div id="shop" className="shop">
    <h2>Find your favourite Products</h2>
      <div className='flex'>
        <SearchFunction />
        <Link to="/filter"><button className='filterBtn'><img src="./img/filterIcon.png" alt="" /></button></Link>
      </div>
      <div id="categories">
        <ul className='categories-header'>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link className='catIcon' to={`/category/${category}`}><img src={`/img/category/${category}.png`} alt="" /><p>{category}</p></Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div id="bs-header"><h3>Popular</h3><Link to="/category/all"><p>View all</p></Link></div>
        <div id="popular" className="popular">
          {popular.map((product) => {
            return (
              <div id="product" key={product.id}>
                <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                <p className='rating'>{product.rating}⭐</p>
                <h4>{product.title}</h4>
                <p className='price'>{product.price} €</p>
                
                <Link to={`/product/${product.id}`}><button className='round'>+</button></Link>
              </div>
          )
        })
        }
        </div>
      <TabBar />
      </div>
    </>
  )
}

export default Shop