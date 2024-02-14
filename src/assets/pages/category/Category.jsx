import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../context/mainProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './category.css'
import SortByFunction from '../../../components/sortByFunction/SortByFunction';
import '../shop/shop.css'
import TabBar from '../../../components/tabBar/TabBar';

const Category = () => {

    const navigate2 = useNavigate()
    
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
        <div  className='oneRem'>
            <button className='noStyleBtn' onClick={() => navigate2(-1)}><img className='backBtnImg' src='/img/back.png'/></button>
            <h1>{category}</h1>
        </div>
        <SortByFunction/>
        <div id="product-grid" className='product-grid'>
        {filtered.map((product) => {
            return (
                <Link  className='pro' to={`/product/${product.id}`}>
                    <div id="product" key={product.id}>
                    <img src={product.images[0]} width="200" alt={product.name} className='product-image'/>
                    <p className='rating'>{product.rating}⭐</p>
                    <h4>{product.title}</h4>
                    <p className='price'>{product.price} €</p>
                    
                    <Link to={`/product/${product.id}`}><button className='round'>+</button></Link>
                  </div>
                </Link>
            )
        })}
        </div>
        <TabBar />
    </>
  )
}

export default Category