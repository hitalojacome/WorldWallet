/* import css */
import './css/App.css'
import './css/reset.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';


/* import components */
import Home from './Components/Home'
import About from './Components/About'
import Data from './Components/Data';
import Team from './Components/Team';
import Mac from './Components/Mac';
import Footer from './Components/Footer';
import Login from './Components/Login';
import NewAccount from './Components/NewAccount';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/NewAccount' element={<NewAccount />} />
        </Routes>
        <About />
        <Data />
        <Team />
        <Mac />
        <Footer />
      </Router>
    </div>
  );
}


export default App;