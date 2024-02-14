import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './splashAni.css'

const Splashscreen = () => {

    const navigate = useNavigate()

    useEffect (() => {
      setTimeout(() => {
        navigate('/onboarding')
      }, "2000");
    }, [])


    return ( 
        <>
        <img className="splash" src="./img/SplashScreen.jpg" alt="" />
        </>
     );
}
 
export default Splashscreen;