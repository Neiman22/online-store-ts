import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";
import Sidebar from "../Sidebar/Sidebar";

//<UserForm />
//<AppRoutes />
const App = () => {  
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />

      </div>
      <Footer />
    </div>
  )
}

export default App