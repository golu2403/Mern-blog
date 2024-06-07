
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/Header";
import Projects from "./Pages/Projects"
import FooterCom from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    <FooterCom />
    </BrowserRouter>
  )
}

