import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const SearchFunction = () => {

    const {setSearch} = useContext(mainContext)
    

    return ( 
        <>
            <input type="text" placeholder="search..." onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
        </>
    );
}

export default SearchFunction