import "./Product.css"
import {NavLink, Outlet} from "react-router-dom";
import noodles from "../../../image/Steaming-Bowl.png";
import burger from "../../../image/Hamburger.png";
import drink from "../../../image/Tropical-Drink.png";
import desert from "../../../image/Shortcake.png";

const Products = () => {
    return (
        <div className="products">
            <ul className="product-list">
                <li> <NavLink end to="/products"><img src={noodles} alt=""/> Noodles</NavLink> </li>
                <li> <NavLink to="/products/burgers"><img src={burger} alt=""/> Burgers</NavLink> </li>
                <li> <NavLink to="/products/drinks"><img src={drink} alt=""/> Drinks</NavLink> </li>
                <li> <NavLink to="/products/deserts"><img src={desert} alt=""/> Deserts</NavLink> </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Products
