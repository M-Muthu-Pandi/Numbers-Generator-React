import './App.css';
import CounterApp from './components/Incdecrement';
import RandomNumber from './components/Randomnumber';

const App = () => {
  return (
    <>
      <header>
        <h1>Counter App & Random Number Generator (1 to 100)</h1>
        <hr />
      </header>
      <main>
        <CounterApp />
        <RandomNumber />
      </main>
    </>
  );
}

export default App;
