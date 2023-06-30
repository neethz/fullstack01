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
    <div>First component</div>
  );
}

function SecondComponent(){
  return (
    <div>Second component</div>
  );
}

class ThirdComponent extends Component {
  render(){
    return (
    <div>Third component</div>
    );
  };
}

class FourthComponent extends Component {
  render(){
    return (
    <div>Fourth Component</div>
    );
  };
}

export default App;
