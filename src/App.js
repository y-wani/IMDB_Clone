import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import axios from 'axios';
import Recommend from './components/Recommend';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Recommend />
    </div>
  );
}

export default App;
