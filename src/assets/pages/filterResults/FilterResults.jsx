import React, { useContext } from 'react'
import { mainContext } from '../../../context/mainProvider'

const FilterResults = () => {

    const {filter, products} = useContext(mainContext)
    console.log(filter);
  return (
    <div>FilterResults</div>
  )
}

export default FilterResults