import './App.css';
import Nav from './components/Nav';
//import WorldAnimation from './components/WorldAnimation';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nav/>     
{//      <WorldAnimation/>
}
      <Home/>
    </div>
  );
}

export default App;
