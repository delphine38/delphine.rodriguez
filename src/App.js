// import logo from './logo.svg';
import './App.css';
import Aboutme from './components/Aboutme';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Realisations from './components/Realisations';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar />
      <Home />
      <Realisations />
      <Competences />
      <Aboutme />
      <Contact />
    </div>
  );
}

export default App;
