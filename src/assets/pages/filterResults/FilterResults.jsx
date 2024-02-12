import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider'
import { Link } from 'react-router-dom'
import SortByFunction from '../../../components/sortByFunction/SortByFunction'

const FilterResults = () => {

    const {filter, products } = useContext(mainContext)
    const [filtered, setFiltered] = useState([]);
  
    useEffect(() => {
      const newFiltered = products.filter(product => {
        const matchesCategory = filter.category ? product.category === filter.category : true;
        const matchesPrice = (filter.priceRange && filter.priceRange.length > 0) ? product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1] : true;
        const matchesBrand = filter.brand ? product.brand === filter.brand : true;
  
        return matchesCategory && matchesPrice && matchesBrand;
      });
  
      setFiltered(newFiltered);
    }, [products, filter]);

  
  return (
    <>
    <div>FilterResults</div>
    <SortByFunction />
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