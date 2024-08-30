import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MyMenu from './components/myMenu/myMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MyMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
