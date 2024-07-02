import "./Single.css"
import {Link, useParams} from "react-router-dom";
import {cardInfo} from "../../../../utils/fakeData.js";

const Single = () => {

    const data = useParams()
    return (
        <div className="single">
            <div>
                <Link to="/products">Back...</Link>
            </div>
            <div className='single-card'>
                {
                    cardInfo.filter(card => card.id === data).map(card =>
                        <div className="single-card-body">
                            <img src={card.img} alt=""/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Single
