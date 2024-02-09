import axios from "axios";
import { useEffect, createContext, useState } from "react";


export const mainContext = createContext();

const MainProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState([])

    // Fetch products from dummyjson.com and save the array of products in products state
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products?limit=0')
            const data = response.data
            console.log(data.products);
            setProducts(data.products)
        }
        fetchProducts()
    }   , [])

    // Fetch categories from dummyjson.com and save the array of categories in categories state

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://dummyjson.com/products/categories')
            const data = response.data
            console.log(data);
            setCategories(data)
        }
        fetchCategories()
    }   , [])
        
  return (
    <mainContext.Provider value={{ products, categories, setProducts, search, setSearch }}>
        {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider