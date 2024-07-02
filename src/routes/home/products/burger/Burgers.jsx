import "./Burgers.css"
import {cardInfo} from "../../../../utils/fakeData.js";
import CardRender from "../card-render/Card-render.jsx";

const Burgers = () => {
    return (
        <div className="burgers">
            <div className="cards">
                {
                    cardInfo.slice(4, 8).map(product =>
                       <CardRender key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )
}
export default Burgers
