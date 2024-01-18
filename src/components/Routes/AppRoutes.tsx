import { Routes, Route } from "react-router-dom"

import { ROUTES } from "../../utils/routes"
import Home from "../Home/Home"
import SingleProduct from "../Products/SingleProduct"
import Profile from "../Profile/Profile"
import SingleCategory from "../Categories/SingleCategory"
import Cart from "../Cart/Cart"
import Favourites from "../Favourites/Favourites"

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
    <Route path={ROUTES.PROFILE} element={<Profile />}/>
    <Route path={ROUTES.CATEGORY} element={<SingleCategory />}/>
    <Route path={ROUTES.CART} element={<Cart />}/>
    <Route path={ROUTES.FAVORITES} element={<Favourites />}/>
  </Routes>
)

export default AppRoutes