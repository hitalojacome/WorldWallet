/* import css */
import './css/App.css'
import './css/reset.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';


/* import components */
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
