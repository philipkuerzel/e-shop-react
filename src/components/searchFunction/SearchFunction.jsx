import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import { useNavigate } from 'react-router-dom';

const SearchFunction = () => {

    const {setSearch, search} = useContext(mainContext)
    const navigate = useNavigate()

    return ( 
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                navigate(`/search/${search}`)}}>
                <input id='searchField' type="text" placeholder="search..." onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
            </form>
           
        </>
    );
}

export default SearchFunction