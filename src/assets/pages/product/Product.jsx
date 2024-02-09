import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider'

const Product = () => {
    const { id } = useParams()
    const { products } = useContext(mainContext)
    const [product, setProduct] = useState()

    useEffect(() => {
        const filterProduct = products.filter((data) => {
            return data.id === Number(id)
        })
        setProduct(filterProduct[0])
        console.log(filterProduct[0]);
    }, [id, products])

    return (
        <>
            <div>Produktdetails</div>
            {product ?
                (
                    <div>
                        <h2>{product.title}</h2>
                        <h2>{product.description}</h2>
                        <h3>{product.price}</h3>
                        <h4>{product.discountPercentage}</h4>
                        <h5>{product.rating}</h5>
                        <h5>{product.stock}</h5>
                        <h5>{product.brand}</h5>
                        <h5>{product.category}</h5>
                        <h5>{product.thumbnail}</h5>

                        {product.images && product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} />
                        ))}
                    </div>
                )
                :
                (
                    <p>
                        Laden...
                    </p>
                )}
        </>
    )
}

export default Product
