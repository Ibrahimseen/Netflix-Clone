import './App.css';
// import "./App.scss";

import {BrowserRouter as Router  , Routes , Route} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';


function App() {
  return (
  <>
      <Router>
        <Header/>
        {/* <Home/> */}
      <Routes>
<Route path="/" element={<Home/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
