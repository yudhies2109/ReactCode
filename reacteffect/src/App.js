import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
