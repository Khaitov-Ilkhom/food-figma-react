import "./Noodles.css"
import {cardInfo} from "../../../../utils/fakeData.js";

import CardRender from "../card-render/Card-render.jsx";


const Noodles = () => {
    return (
        <div className="noodles">
            <div className="cards">
                {
                    cardInfo.slice(0, 4).map(product =>
                        <CardRender key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )
}
export default Noodles
