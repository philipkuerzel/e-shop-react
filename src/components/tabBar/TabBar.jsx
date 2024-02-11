import { Link } from 'react-router-dom'
import { useState } from 'react';
import "./tabBar.css"

const TabBar = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  console.log(modalVisible);

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
              <input type='text' placeholder='search...' />
              <button id='close' onClick={hideModal}>X</button>
            </div>
          ) : null}
        </div>
    </>
  )
}

export default TabBar