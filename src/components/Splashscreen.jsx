import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splashscreen = () => {

    const navigate = useNavigate()

    useEffect (() => {
      setTimeout(() => {
        navigate('/onboarding')
      }, "2000");
    }, [])


    return ( 
        <>
        <img className="splash" src="..\public\img\SplashScreen.jpg" alt="" />
        </>
     );
}
 
export default Splashscreen;