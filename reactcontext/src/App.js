import React from 'react'
import logo from './logo.svg';
import './App.css'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={ 'Bambang Ramadhan' }>
      <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
