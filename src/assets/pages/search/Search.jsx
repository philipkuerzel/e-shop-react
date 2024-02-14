import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SortByFunction from '../../../components/sortByFunction/SortByFunction'
import TabBar from '../../../components/tabBar/TabBar'
import '../shop/shop.css'

const Search = () => {
    const { products } = useContext(mainContext)
    const [filtered, setFiltered] = useState([])
    const searchObj = useParams()
    const searchTerm = searchObj.searchTerm

    const navigate2 = useNavigate()


    useEffect (() => {
        const filterProducts = products.filter((product) => {
            return ['title', 'brand', 'description', 'category'].some(attribute => product[attribute].toLowerCase().includes(searchTerm));
        })
        setFiltered(filterProducts)
    }    , [searchTerm , products])

    console.log(filtered);
  return (
    <>
    <div className='flexSearch'>
      <button className='noStyleBtn' onClick={() => navigate2(-1)}><img className='backBtnImg' src='/img/back.png'/></button>
      <h1 className='oneRem'>Search results</h1>
    </div>
    <SortByFunction />
    <div id="product-grid" className='product-grid'>
        {filtered.map((product) => {
            return (
                <div id="product" key={product.id}>
                <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                <p className='rating'>{product.rating}⭐</p>
                <h4>{product.title}</h4>
                <p className='price'>{product.price} €</p>
                
                <Link to={`/product/${product.id}`}><button className='round'>+</button></Link>
                <TabBar />
              </div>
            )
        })}
        </div>
    </>
  )
}

export default Search