import { Routes, Route } from "react-router-dom"

import { ROUTES } from "../../utils/routes"
import Home from "../Home/Home"

//<Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />

  </Routes>
)

export default AppRoutes