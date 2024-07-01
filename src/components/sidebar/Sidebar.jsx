import "./Sidebar.css"
import {NavLink} from "react-router-dom";
import {AiOutlineProduct} from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {IoHomeOutline, IoSettingsOutline} from "react-icons/io5";
import { RiCouponLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";


const Sidebar = () => {
    return (
        <div className="wrapper">
            <ul className="ul">
                <li><NavLink to=''><IoHomeOutline/></NavLink></li>
                <li><NavLink to='products'><AiOutlineProduct/></NavLink></li>
                <li><NavLink to='likes'><FaRegHeart/></NavLink></li>
                <li><NavLink to='orders'><TbShoppingBag/></NavLink></li>
                <li><NavLink to='coupons'><RiCouponLine/></NavLink></li>
                <li><NavLink to='settings'><IoSettingsOutline/></NavLink></li>

            </ul>
        </div>
    )
}
export default Sidebar
