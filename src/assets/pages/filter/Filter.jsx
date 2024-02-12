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
                <h2 className='center'>Filters</h2>
                <div>
                    <h3>Categories</h3>
                    <select onChange={(e) => (setCategory(e.target.value))}>
                        {sortedCategories.map((category, index) => {
                            return (
                                <option className='active' key={index} value={(category)}>{category}</option>
                            )
                        })}
                    </select>
                </div> 
                    <div>
                        <h3>Prices</h3>
                        <select onChange={(e) => setPriceRange(e.target.value.split(',').map(Number))}>
                        <option value="0,20">0-20 €</option>
                        <option value="20,50">20-50 €</option>
                        <option value="50, 100">50-100 €</option>
                        <option value="101, Infinity">Über 100€</option>
                    </select>
                    </div>   
                   <div>
                        <h3>Brands</h3>
                    <select onChange={(e) => (setBrand(e.target.value))}>
                    {
                        [...new Set(brands.map(product => product.brand))].map((brand, index) => {
                        return (
                            <option className='active' key={index} value={(brand)}>{brand}</option>
                            )
                        })
                    }
                        
                    </select>
                   </div>
                <div>
                    <Link to="/filterResults">
                        <button onClick={()=> setFilter({
                        category: category,
                        brand: brand,
                        priceRange: priceRange
                    })}>Apply</button></Link>
                </div>
            </section>
        </>
    )
}
export default FilterFunction