import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Item />
      <Item />
      <Item />
      <Item />
      </div>
    </div>
  );
}

export default App;
