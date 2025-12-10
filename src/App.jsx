
import Header from "./components/Header"
import Products from "./hooks/Products"
import Home from "./pages/Home"
import { Outlet } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";


function App() {

  return (
      <div>
        <Header />
        <ToastContainer
          position='top-center'
          autoClose={1500}
          closeOnClick
          pauseOnHover
          theme='light'
        />
        <main>
          <Outlet/>
        </main>
      <Footer/>

      </div>
  )
}

export default App
