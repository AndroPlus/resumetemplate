import logo from './logo.svg';
import './App.css';
import ResumeTemplate from './resume-template/ResumeTemplate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <ResumeTemplate> </ResumeTemplate>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
