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
      <SearchFunction />
      <Link to="/filter">filter</Link>
      <div id="categories">
        <ul className='categories-header'>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div id="bs-header"><h2>Popular</h2><Link to="/category/all">View all</Link></div>
        <div id="popular" className="popular">
          {popular.map((product) => {
            return (
              <div id="product" key={product.id}>
                <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                <p>{product.rating}⭐</p>
                <h3>{product.title}</h3>
                <p>{product.price}€</p>
                
                <Link to={`/product/${product.id}`}>View</Link>
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