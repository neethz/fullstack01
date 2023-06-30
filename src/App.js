import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      My Todo app
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
    </div>
    
  );
}

function FirstComponent(){
  return (
    <div className='FirstComponent'>First component</div>
  );
}

function SecondComponent(){
  return (
    <div className='SecondComponent'>Second component</div>
  );
}

class ThirdComponent extends Component {
  render(){
    return (
    <div className='ThirdComponent'>Third component</div>
    );
  };
}

class FourthComponent extends Component {
  render(){
    return (
    <div className='FourthComponent'>Fourth Component</div>
    );
  };
}

export default App;
