import "./Drinks.css"
import {cardInfo} from "../../../../utils/fakeData.js";
import CardRender from "../card-render/Card-render.jsx";

const Drinks = () => {
    return (
        <div className="drinks">
            <div className="cards">
                {
                    cardInfo.slice(8, 12).map(product =>
                        <CardRender key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )
}
export default Drinks
