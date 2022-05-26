import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import CurrencyPage from './Pages/Currencies/CurrencyPage';
import HomePage from './Pages/Home/HomePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/currencies" element={<CurrencyPage />} />
    </Routes>
  </Router>
);

export default App;
