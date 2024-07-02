import "./Card-render.css"
import {FaStar} from "react-icons/fa";
import {FaPlus, FaStarHalfStroke} from "react-icons/fa6";
import {Link} from "react-router-dom";

const CardRender = ({product}) => {
    return (
        <Link to={`/single/${product.id}`} className="card">
            <img className="card-img" src={product.img} alt={product.name}/>
            <div className="card-body">
                <h3>{product.name}</h3>
                <p className="desc">{product.description}</p>
                <p className="star"><span><FaStar/></span> <span><FaStar/></span> <span><FaStar/></span>
                    <span><FaStar/></span> <span><FaStarHalfStroke/></span> {product.rating}</p>
                <h5>${product.price}</h5>
                <button><FaPlus/></button>
            </div>
        </Link>
    )
}
export default CardRender
