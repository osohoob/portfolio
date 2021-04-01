import Navbar from './components/portfolio/Navbar';
import Home from './components/portfolio/Home';
import Projects from './components/portfolio/projects';
import '../src/components/style/main.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
