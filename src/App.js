import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Plans from './components/Pages/Plans/Plans';
import Courses from './components/Pages/Courses/Courses';
import About from './components/Pages/About Us/About';
import Community from './components/Pages/Community/Community';
import Conatct from './components/Pages/Contact Us/Conatct';
import Support from './components/Pages/Support Us/Support';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Plans/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/contact' element={<Conatct/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
