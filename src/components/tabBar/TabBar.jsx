import React from 'react'
import { Link } from 'react-router-dom'
import SearchFunction from '../searchFunction/SearchFunction'
import "./tabBar.css"

const TabBar = () => {
  return (
    <>
    <div className='tabBar'>
        <button className='homeBtn'><Link to='/home'></Link>home</button>
        <button className='searchBtn'>{<SearchFunction/>}</button>
    </div>
    </>
  )
}

export default TabBar