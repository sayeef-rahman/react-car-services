import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
