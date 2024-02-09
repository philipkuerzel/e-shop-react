import { useNavigate } from "react-router-dom";

const Splashscreen = () => {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/onboarding')
      }, "2000");


    return ( 
        <>
        <img src="..\public\img\SplashScreen.jpg" alt="" />
        </>
     );
}
 
export default Splashscreen;