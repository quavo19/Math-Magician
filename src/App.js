import './Style.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Navbar from './Components/Nav';
import HomePage from './Components/Home';
import Quotes from './Components/Quotes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
