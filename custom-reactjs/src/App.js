import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
// import UserForm from './components/UserForm';
// import DocTitleOne from './components/DocTitleOne';
// import DocTitleTwo from './components/DocTitleTwo';

function App() {
  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo/> */}
      <CounterOne />
      <CounterTwo />
      {/* <UserForm/> */}
    </div>
  );
}

export default App;
