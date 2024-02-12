import React, { useContext } from 'react'
import { mainContext } from '../../../context/mainProvider'

const FilterResults = () => {

    const {filter, products} = useContext(mainContext)
    console.log(filter);
    console.log(filter.brand, filter.category);

    const getProducts = products.filter(product => 
      (filter.category ? product.category.includes(filter.category) : products) ||
      (filter.brand ? product.brand.includes(filter.brand) : products)
    );

  console.log(getProducts);
  return (
    <div>FilterResults</div>
  )
}

export default FilterResults