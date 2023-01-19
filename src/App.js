
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutPage from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
      <Routes>
        <Route path='/about' element = {<AboutPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
