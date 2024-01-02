import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
