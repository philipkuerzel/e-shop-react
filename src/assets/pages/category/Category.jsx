import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider';
import { Link, useParams } from 'react-router-dom';
import './category.css'

const Category = () => {
    
    const { products } = useContext(mainContext)
    const [filtered, setFiltered] = useState([])
    const categoryName = useParams()
    const category = categoryName.category
    console.log(category.category);
    
    useEffect(() => {
        const filterProducts = products.filter((product) => {
            if (category === 'all') {
                return products
            } else {
                return product.category === category
            }
        })
        console.log(filterProducts);
        setFiltered(filterProducts)
    }   , [category, products])

  return (
    <>
        <h1>{category}</h1>
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

export default Category