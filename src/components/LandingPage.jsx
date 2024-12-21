import { Link } from "react-router-dom";
import Footer from "./Footer";

const LandingPage = ()  => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link to="/login">Login</Link> | <Link to="/register">Registration</Link>
            </nav>
        <Footer/>
        </div>
    );
}

export default LandingPage;
