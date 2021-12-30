import logo from './logo.svg';
import './App.css';
import Navabar from './Components/Navabar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import { BrowserRouter as Router, Routes, Route, 
  // BrowserRouter
 } from 'react-router-dom'; //in version 6 of react switch has been replaced by routes and we need not use exact keyword anymore

function App() {
  return (
    <>
      <Router>
      <Navabar color="red"/>
        <Routes>
          {/* <Route path='/' 
          // element={<Movies />} 

          /> */}
          <Route path='/' exact element={<><Banner/><Movies/></>} />
          <Route path='/favourites' element={<Favourite />} />
        </Routes>
        {/* <Banner/>
    <Movies/> */}
        {/* <Favourite/> */}
      </Router>
    </>
  );
}

export default App;
