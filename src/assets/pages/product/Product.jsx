import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider'
import TabBar from '../../../components/tabBar/TabBar';
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
                        <div className='flex'>
                            <button className='noStyleBtn' onClick={() => navigate2(-1)}><img className='backBtnImg' src='/img/back.png'/></button>
                            <h2>{product.title}</h2>
                        </div>
                        <div className='imgAndText'>
                            <img className='thumbnail' src={product.thumbnail} alt="" />
                            <section className='flex column width'>
                                <div className='flex spaceTitle'>
                                    <h3 className='lowerTitle'>{product.title}</h3>
                                    <div className='flex centerProduct'>
                                        <button style={{backgroundColor: count === 1 ? 'lightgrey' : 'grey'}} className='count height' onClick={minusEins}>-</button>
                                        <p>{count}</p>
                                        <button className='count height' onClick={plusEins}>+</button>
                                    </div>
                                </div>
                                <h5 className='rat'>{product.rating} ⭐</h5>
                                <div className='space'>
                                    <h5 className='rat mg'>{product.stock} pieces in stock</h5>
                                    <h3 className='priceDetails'>{product.price} €</h3>
                                </div>
                            </section>
                        </div>
                        <section className='descSection'>
                            <h3 className='desc'>Description</h3>
                            <p>{product.description}</p>
                            <button className='addCart'>Add to Cart</button>
                        </section>

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
                <TabBar />
        </>
    )
}

export default Product
