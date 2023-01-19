import './Style.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Nav';
import HomePage from './components/Home';
import Quotes from './components/Quotes';

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
