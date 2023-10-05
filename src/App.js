import './App.css';
import Header from './components/Header';
import Header1 from './components/Header1';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
function App() {
  return (
    <div className="App">
    <div className='menu'>
        <BrowserRouter>
        <Routes>
            <Route except path='/' element={<Header/>}></Route>
            <Route except path='/' element={<Header1/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
