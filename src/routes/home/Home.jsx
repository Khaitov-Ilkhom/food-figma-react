import "./Home.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="home-content">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}
export default Home
