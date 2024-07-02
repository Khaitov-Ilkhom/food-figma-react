import "./Navbar.css"
import { PiHandWavingDuotone } from "react-icons/pi";


const Navbar = () => {
    return (
        <div className="nav">
            <ul className="nav-ul">
                <li>
                    <h3>Welcome, Ali <span> <PiHandWavingDuotone/></span></h3>
                    <p>Discover whatever you need</p>
                </li>
                <li>
                    <input type="text" placeholder="Search..."/>
                </li>
            </ul>
        </div>
    )
}
export default Navbar
