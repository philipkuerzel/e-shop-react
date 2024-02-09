import React, { useCallback, useContext } from 'react'
import SearchFunction from '../../../components/searchFunction/SearchFunction'
import { mainContext } from '../../../context/mainProvider'
import TabBar from '../../../components/tabBar/TabBar'
import FilterFunction from '../../../components/filterFunction/FilterFunction'

const Home = () => {

  const {search, products} = useContext(mainContext)


  return (
    <>
      <SearchFunction/>

      <main>
        {products.filter(product => (product.title).toLowerCase().includes(search)).map((product) => {
          console.log(product.title);
        })}
      </main>
      <footer>
        <TabBar/>
      </footer>
    </>
  )
}

export default Home