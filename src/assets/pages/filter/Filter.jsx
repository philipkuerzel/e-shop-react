import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider';
import "./filter.css"
import { Link } from 'react-router-dom';

const FilterFunction = () => {


    const {categories, products, setFilter} = useContext(mainContext)
    const [priceRange, setPriceRange] = useState()
    const [brand, setBrand] = useState()
    const [category, setCategory] = useState()
    const [brands, setBrands] = useState([])
    const [sortedCategories, setSortedCategories] = useState([])

    useEffect(() => {
        const sortBrands = [...products].sort((a, b) => {
          return a.brand.localeCompare(b.brand)
        })
        setBrands(sortBrands)
        console.log(sortBrands);
      }, [products])

      useEffect(() => {
        const sortCategories = [...categories].sort((a, b) => {
          return a.localeCompare(b)
        })
        setSortedCategories(sortCategories)
        console.log(sortCategories);
      }, [products, categories])

console.log(category, brand, priceRange);
    return (
        <>
            <section className='grid'>
                <h2>Categories</h2>
                <div>
                    {sortedCategories.map((category, index) => {
                        return (
                            <h3 className='active' key={index} onClick={()=> setCategory(category)}>{category}</h3>
                        )
                    })}
                </div> 
                    <h2>Prices</h2>
                <div>
                    <h3 onClick={()=> setPriceRange([0,20])}>0-20 €</h3>
                    <h3 onClick={()=> setPriceRange([20,50])}>20-50 €</h3>
                    <h3 onClick={()=> setPriceRange([50,100])}>50-100 €</h3>
                    <h3 onClick={()=> setPriceRange([101,Infinity])}>über 100 €</h3>
                </div>   
                    <h2>Brands</h2>
                <div>
                {
                    [...new Set(brands.map(product => product.brand))].map((brand, index) => {
                    return (
                        <h3 className='active' key={index} onClick={() => setBrand(brand)}>{brand}</h3>
                        )
                    })
                }
                    
                </div>
                <Link to="/filterResults">
                    <button onClick={()=> setFilter({
                    category: category,
                    brand: brand,
                    priceRange: priceRange
                })}>Apply</button></Link>
            </section>
        </>
    )
}
export default FilterFunction