import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import './sortByFunction.css'

const SortByFunction = () => {
    const {products, setProducts, filtered, setFiltered} = useContext(mainContext)
    const [sortBy, setSortBy] = useState('A-Z');
  
    useEffect(() => {
      const sortProducts = () => {
        return [...(filtered.length > 1 ? filtered : products)].sort((a, b) => 
          sortBy === 'A-Z' ? a.title.localeCompare(b.title) :
          sortBy === 'Z-A' ? b.title.localeCompare(a.title) :
          sortBy === 'Price descending' ? b.price - a.price :
          sortBy === 'Price ascending' ? a.price - b.price :
          sortBy === 'Rating descending' ? b.rating - a.rating :
          0
        );
      };
      (filtered.length > 1 ? setFiltered : setProducts)(sortProducts());
    }, [sortBy]);

    console.log(sortBy);
  return (

    <>
    <div className='sort'>
      <label htmlFor="select">Sort by: </label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Price descending">Price descending</option>
        <option value="Price ascending">Price ascending</option>
        <option value="Rating descending">Rating descending</option>
      </select>
    </div>
    </>
  )
}

export default SortByFunction