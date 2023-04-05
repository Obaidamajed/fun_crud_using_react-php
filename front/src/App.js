import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import Login from './component/login';
import Signup from './component/signup';
import Footer from './component/footer';
import Header from './component/header';
import ViewMessage from './component/viewMessage';
import EditMessage from './component/editMessage';



function App() {
  return (
    <div>

      <Header/>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="contact/view" element={ <ViewMessage/> } />
          <Route path="contact/:id/edit" element={ <EditMessage/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="Signup" element={ <Signup/> } />
        </Routes>

      <Footer/>
  
    </div>
  );
}

export default App;
