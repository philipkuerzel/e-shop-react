import { Link } from "react-router-dom";

const Onboarding = () => {
    return ( 
        <>
        <img src="..\public\img\onboarding.png" alt="" />
        
        <Link to={'/home'}><button>Get Started</button></Link>
        </>
     );
}
 
export default Onboarding;