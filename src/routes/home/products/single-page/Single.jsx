import "./Single.css"
import {Link, useParams} from "react-router-dom";
import {cardInfo} from "../../../../utils/fakeData.js";
import {FaStar} from "react-icons/fa";
import {FaStarHalfStroke} from "react-icons/fa6";

const Single = () => {
    const {id} = useParams()
    const food = cardInfo.find(food => food.id === parseInt(id))
    if (!food) {
        return <div>Food Not Found</div>
    }
    console.log(food)
    return (
        <div className="single">
            <div className="back">
                <Link to="/products">Back...</Link>
            </div>
            <div className='single-card'>
                <div className="single-img">
                    <img src={food.img} alt={food.name}/>
                </div>
                <div className="single-card-body">
                    <h2>{food.name}</h2>
                    <p className="desc">{food.description}</p>
                    <div className="bottom">
                        <p><span><FaStar/></span> <span><FaStar/></span> <span><FaStar/></span>
                            <span><FaStar/></span> <span><FaStarHalfStroke/> </span> {food.rating}</p>
                        <p>${food.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Single
