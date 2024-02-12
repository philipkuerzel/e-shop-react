import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'

const SortByFunction = () => {
    const {products, setProducts} = useContext(mainContext)
    const [sortBy, setSortBy] = useState('A-Z');
    const arrayCopy = [...products]
  
    useEffect(() => {
      const sortProducts = () => {
        return [...products].sort((a, b) => 
          sortBy === 'A-Z' ? a.title.localeCompare(b.title) :
          sortBy === 'Z-A' ? b.title.localeCompare(a.title) :
          sortBy === 'Price descending' ? b.price - a.price :
          sortBy === 'Price ascending' ? a.price - b.price :
          sortBy === 'Rating descending' ? b.rating - a.rating :
          0
        );
      };
      setProducts(sortProducts())
    }, [sortBy]);

    console.log(sortBy);
  return (

    <>
    <div>
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