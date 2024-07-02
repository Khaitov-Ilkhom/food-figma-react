import "./Single.css"
import {Link, useParams} from "react-router-dom";
import {cardInfo} from "../../../../utils/fakeData.js";

const Single = () => {
    const {id} = useParams()
    const food = cardInfo.filter(food => food.id === parseInt(id))
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
                <div>
                    <img style={{width: "100px"}} src={food.img} alt={food.name}/>
                </div>
                <div>
                    <h2>{food.name}</h2>
                </div>
            </div>
        </div>
    )
}
export default Single
