import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import axios from 'axios';
import Recommend from './components/Recommend';
import Series from './components/Series';
import SectionSeparator from './components/SectionSeparator ';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Recommend />
      <Series />
    </div>
  );
}

export default App;
