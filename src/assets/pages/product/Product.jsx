import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider'
import './product.css'

const Product = () => {
    const { id } = useParams()
    const { products } = useContext(mainContext)
    const [product, setProduct] = useState()
    const [count, setCount] = useState(1)

    const navigate2 = useNavigate()

    const plusEins = () => {
        setCount(count + 1)
    }
    const minusEins = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        const filterProduct = products.filter((data) => {
            return data.id === Number(id)
        })
        setProduct(filterProduct[0])
        console.log(filterProduct[0]);
    }, [id, products])

    return (
        <>
            {product ?
                (
                    <div className='detail'>
                        <button onClick={() => navigate2(-1)}>^^</button>
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt="" />
                        <section className='flex column width'>
                            <div className='flex centerProduct'>
                                <h3>{product.title}</h3>
                                <div className='flex centerProduct'>
                                    <button style={{backgroundColor: count === 1 ? 'lightgrey' : 'grey'}} className='count height' onClick={minusEins}>-</button>
                                    <p>{count}</p>
                                    <button className='count height' onClick={plusEins}>+</button>
                                </div>
                            </div>
                            <h5>{product.rating} ⭐</h5>
                            <h5>{product.stock} pieces in stock</h5>
                            <h3 className='price'>{product.price} €</h3>
                        </section>
                        <p>{product.description}</p>

                        {/* {product.images && product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} />
                        ))} */}
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
