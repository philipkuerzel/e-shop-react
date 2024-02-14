import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./tabBar.css"

const TabBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    window.onscroll = function() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
         setIsVisible(false);
      } else {
         setIsVisible(true);
      }
      lastScrollTop = st <= 0 ? 0 : st; 
    }
  }, []);

  return (
    <div className={`tabBar ${isVisible ? '' : 'hide'}`}>
      <Link to='/home'><button className='noStyleBtn'><img src="/img/Home.png" alt="" /></button></Link>
      <button className='noStyleBtn'><a href='/home#searchField'><img src="/img/Search.png" alt="" /></a></button>
    </div>
  )
}

export default TabBar;