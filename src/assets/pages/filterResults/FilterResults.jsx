import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider'
import { Link } from 'react-router-dom'

const FilterResults = () => {

    const {filter, products } = useContext(mainContext)
    const [filtered, setFiltered] = useState([])
    console.log(filter.category);
    console.log(filter.priceRange);
    console.log(filter.brand);

    useEffect(() => {
        const getProducts = products.filter((product) => {
            const categoryMatch = filter.category ? product.category.includes(filter.category) : true;
            const brandMatch = filter.brand ? product.brand.includes(filter.brand) : true;
            const priceRangeMatch = filter.priceRange ? (product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1]) : true;

            console.log("categoryMatch:", categoryMatch);
            console.log("brandMatch:", brandMatch);
            console.log("priceRangeMatch:", priceRangeMatch);

            return categoryMatch && brandMatch && priceRangeMatch
            
            
            
        })
        
        setFiltered(getProducts)
        
    }, [filter])
    
    console.log(filtered);
  
  return (
    <>
    <div>FilterResults</div>
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

export default FilterResults