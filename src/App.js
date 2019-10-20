import React from 'react';
import logoBlaBlaBla from './logo.svg';
import './App.css';
import CustomBtn from './components/CustomBtn';
import fulDate from './components/CustomBtn';

let appId = 'app1';
let arr = ['Dmytro', 'Valentyna', 'Ann', 'Denis'];
console.log(fulDate);

function App() {
  return (
      <React.Fragment>
        <CustomBtn name={'afwafw'} />
        <div className="App-main" id={appId}>
            <ul>
                { arr.map(item => <li key={item} className={'cl-' + item}>{item.toUpperCase()}</li>) }
            </ul>
          <header className="App-header">
            <img src={logoBlaBlaBla} className="App-logo" alt="logo" />
          </header>
        </div>
      </React.Fragment>
  );
}

export default App;
