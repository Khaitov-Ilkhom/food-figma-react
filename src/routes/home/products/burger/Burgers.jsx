import "./Burgers.css"
import {burgers} from "../../../../utils/fakeData.js";
import {FaStar} from "react-icons/fa";
import {FaPlus, FaStarHalfStroke} from "react-icons/fa6";

const Burgers = () => {
    return (
        <div className="burgers">
            <div className="cards">
                {
                    burgers.map(product =>
                        <div key={product.id} className="card">
                            <div className="card-img">
                                <img src={product.img} alt={product.name}/>
                            </div>
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p className="desc">{product.description}</p>
                                <p className="star"><span><FaStar/></span> <span><FaStar/></span> <span><FaStar/></span>
                                    <span><FaStar/></span> <span><FaStarHalfStroke/></span> {product.rating}</p>
                                <h5>${product.price}</h5>
                                <button><FaPlus/></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Burgers
