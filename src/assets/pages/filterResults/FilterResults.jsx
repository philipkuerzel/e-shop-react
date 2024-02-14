import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider'
import { Link } from 'react-router-dom'
import '../shop/shop.css'
import SearchFunction from '../../../components/searchFunction/SearchFunction'
import SortByFunction from '../../../components/sortByFunction/SortByFunction'
import TabBar from '../../../components/tabBar/TabBar'

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

            return categoryMatch && brandMatch && priceRangeMatch
        })
        setFiltered(getProducts)
    }, [filter])
    
    console.log(filtered);
  
  return (
    <>
    <div className='flex'>
        <SearchFunction />
        <Link to="/filter"><button className='filterBtn'><img src="/img/filterIcon.png" alt="" /></button></Link>
    </div>
    <SortByFunction />
    <div id="product-grid" className='popular'>
        {filtered.map((product) => {
            return (
                <div id="product" key={product.id}>
                <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                <p className='rating'>{product.rating}⭐</p>
                <h4>{product.title}</h4>
                <p className='price'>{product.price} €</p>
                
                <Link to={`/product/${product.id}`}><button className='round'>+</button></Link>
                </div>
            )
        })}
        </div>
        <TabBar />
    </>
  )
}

export default FilterResults