import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm';
import {
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;