import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm';
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
    </>
  );
};

export default App;