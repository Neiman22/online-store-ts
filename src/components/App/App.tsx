import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";
import Sidebar from "../Sidebar/Sidebar";

import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

const App = () => {
  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories()
  }, []);
  
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App