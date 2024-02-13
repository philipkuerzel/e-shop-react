import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import "./tabBar.css"
import { mainContext } from '../../context/mainProvider';

const TabBar = () => {
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
        <button className='homeBtn'><Link to='/home'></Link>home</button>
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

export default TabBar