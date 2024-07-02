import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import Products from "./home/products/Products.jsx";
import Likes from "./home/likes/Likes.jsx";
import Orders from "./home/orders/Orders.jsx";
import Coupons from "./home/coupons/Coupons.jsx";
import Settings from "./home/settings/Settings.jsx";
import NotFound from "./not-found/NotFound.jsx";
import Noodles from "./home/products/noodles/Noodles.jsx";
import Burgers from "./home/products/burger/Burgers.jsx";
import Drinks from "./home/products/drink/Drinks.jsx";
import Deserts from "./home/products/desert/Deserts.jsx";
import Single from "./home/products/single-page/Single.jsx";


const RouteController = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}>
                <Route path="products" element={<Products/>}>
                    <Route index path="" element={<Noodles/>} />
                    <Route path="burgers" element={<Burgers/>} />
                    <Route path="drinks" element={<Drinks/>} />
                    <Route path="deserts" element={<Deserts/>} />
                </Route>
                <Route path="likes" element={<Likes/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="coupons" element={<Coupons/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>
            <Route path="/single/:id" element={<Single/>} />
            <Route path="not-found" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="not-found" />}/>
        </Routes>
    )
}
export default RouteController
