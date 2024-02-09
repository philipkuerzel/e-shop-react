import { Link } from "react-router-dom";

const Onboarding = () => {
    return ( 
        <>
        <main className="onboarding">
            <img src="..\public\img\onboarding.png" alt="" />
            <div>
                <h2>Biggest Sell at Your Fingerprint</h2>
                <p>Find your best products from popular shop without any delay</p>
            </div>
            <Link to={'/home'}><button>Get Started</button></Link>
        </main>
        </>
     );
}
 
export default Onboarding;