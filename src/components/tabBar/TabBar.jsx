import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect} from 'react';
import "./tabBar.css"
import { mainContext } from '../../context/mainProvider';

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
  
  const {setSearch, search} = useContext(mainContext)
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  console.log(modalVisible);
  const navigate = useNavigate()

  return (
    <>
    <div className='tabBar'>
      {modalVisible ? ( null ) : (
        <>
        <button className='homeBtn'><Link to='/home'></Link><img src="../" alt="" /></button>
        <button className='searchBtn' onClick={showModal}>search</button>
        </>
        )}
            {modalVisible ? (
            <div id='searchModal' className='searchModal'>
               <form onSubmit={(e) => {
                e.preventDefault()
                navigate(`/search/${search}`)}}>
                <input type="text" placeholder="search..." onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
            </form>
              <button id='close' onClick={hideModal}>X</button>
            </div>
          ) : null}
        </div>
    </>
  )
}
export default TabBar;