import { Link } from "react-router-dom";
import './onboardAni.css'
import './splashAni.css'

const Onboarding = () => {
    return ( 
        <>
        <main className="onboarding">
            <img src="/img/onboarding.png" alt="" />
            <div>
                <h2 className="slide-in-elliptic-bottom-fwd">Biggest Sell at Your Fingerprint</h2>
                <p className="slide-in-elliptic-bottom-bck">Find your best products from popular shop without any delay</p>
            </div>
            <Link className="bounce-in-bottom" to={'/home'}><button className="jello">Get Started</button></Link>
        </main>
        <img className="splash" src="/img/SplashScreen.jpg" alt="" />
        </>
     );
}
 
export default Onboarding;