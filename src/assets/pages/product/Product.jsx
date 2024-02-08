import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider'

const Product = () => {
    const productId = useParams()
    const { products } = useContext(mainContext)
    const [ product, setProduct] = useState()

    useEffect (() => {
        const filterProduct = products.filter((data) =>{
            return data.id === Number(productId.id)
        })
        setProduct(filterProduct[0])
        console.log(filterProduct[0]);
    }, [productId, products])

  return (
    <>
    
    </>
  )
}

export default Product