import './App.css';

function App() {
  const today = new Date();
  return (
    <div className="App">
      <h1>Mohammad Waseem</h1>
      <h2>Integral University</h2>
      <h3>{ today.toDateString() }</h3>
      <h3>{ 3+2 }</h3>
    </div>
  );
}

export default App;
