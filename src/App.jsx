import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home/home'
import Products from './assets/pages/products/Products'
import Product from './assets/pages/product/product'
import Shop from './assets/pages/shop/Shop'
import Category from './assets/pages/category/Category'
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:id" element={<Product />} /> 
    <Route path="/category/:category" element={<Category />} />
    </Routes>      
    </>
  )
}

export default App
