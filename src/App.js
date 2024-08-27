// import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, Routes, Route} from  "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/book-seat" element={<SeatBooking/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
