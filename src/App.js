
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutPage from './pages/About';
import { auth } from './firebase';
import { Routes, Route } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
    </div>
  );
}

export default App;
