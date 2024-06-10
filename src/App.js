import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adddata from './components/Adddata';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Adddata/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
