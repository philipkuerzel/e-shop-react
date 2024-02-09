import { Route, Routes } from 'react-router-dom'
import Products from './assets/pages/products/Products'
import Product from './assets/pages/product/product'
import Shop from './assets/pages/shop/Shop'
import Splashscreen from './components/Splashscreen'
import Onboarding from './components/Onboarding'
import Category from './assets/pages/category/Category'
import './App.css'
import Search from './assets/pages/search/Search'
import Filter from './assets/pages/filter/Filter'
import FilterResults from './assets/pages/filterResults/FilterResults'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Splashscreen />} />
    <Route path='/onboarding' element={<Onboarding />} />
    <Route path="/home" element={<Shop />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:id" element={<Product />} /> 
    <Route path="/category/:category" element={<Category />} />
    <Route path="/search/:searchTerm" element={<Search />} />
    <Route path="/filter" element={<Filter/>}/>
    <Route path='/filterResults' element={<FilterResults/>}/>
    </Routes>      
    </>
  )
}

export default App
