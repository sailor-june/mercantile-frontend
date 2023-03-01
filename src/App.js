
import './App.css';
import {useState, useEffect} from 'react'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import { auth, login, logout } from './firebase';
import { Routes, Route } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import Wanted from './pages/Wanted';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  
  return (
    <div className="App">
      <Header user={user} login={ login } logout={ logout }/>
      <Main user={user}/>
      <Footer />
    </div>
  );
}

export default App;
