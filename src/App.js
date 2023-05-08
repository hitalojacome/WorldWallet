/* import css */
import './css/App.css'
import './css/reset.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';


/* import components */
import Home from './Components/Home'
import About from './Components/About'
import Data from './Components/Data';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
        <About/>
        <Data/>
      </Router>
    </div>
  );
}

export default App;
