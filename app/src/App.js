import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div>
          <span class="material-symbols-outlined">search</span>
          <span class="material-symbols-outlined">home</span>
          <span class="material-symbols-outlined">settings</span>
          <span class="material-symbols-outlined">favorite</span>
        </div>
      </header>
    </div>
  );
}

export default App;
