import "./Deserts.css"
import {cardInfo} from "../../../../utils/fakeData.js";
import CardRender from "../card-render/Card-render.jsx";

const Deserts = () => {
    return (
        <div className="deserts">
            <div className="cards">
                {
                    cardInfo.slice(12).map(product =>
                       <CardRender key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )
}
export default Deserts
