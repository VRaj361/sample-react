import logo from './logo.svg';
import './App.css';
import {Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import VivaLoginAuthentication from './components/VivaLoginAuthentication';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/authenticationLogin" element={<VivaLoginAuthentication/>}/>
    </Routes>
  );
}

export default App;
