import axios from "axios";
import { useEffect, createContext, useState } from "react";



export const mainContext = createContext();

const MainProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products')
            const data = response.data
            console.log(data.products);
            setProducts(data.products)
        }
        fetchProducts()
    }   , [])


        
  return (
    <>
    <mainContext.Provider value={{ products }}>
        {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider