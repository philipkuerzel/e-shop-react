import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider'
import { Link, useParams } from 'react-router-dom'

const Search = () => {
    const { products } = useContext(mainContext)
    const [filtered, setFiltered] = useState([])
    const searchObj = useParams()
    const searchTerm = searchObj.searchTerm

    useEffect (() => {
        const filterProducts = products.filter((product) => {
            return ['title', 'brand', 'description', 'category'].some(attribute => product[attribute].toLowerCase().includes(searchTerm));
        })
        setFiltered(filterProducts)
    }    , [searchTerm , products])

    console.log(filtered);
  return (
    <>
    <h1>Search results</h1>
    <div id="product-grid" className='product-grid'>
        {filtered.map((product) => {
            return (
                <div id="product" key={product.id}>
                <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                <p>{product.rating}⭐</p>
                <h3>{product.title}</h3>
                <p>{product.price}€</p>
                <Link to={`/product/${product.id}`}>View</Link>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default Search