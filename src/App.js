import './App.css';
import Counter from './Components/counter/Counter';


function App() {
  return (
    <div className="App">
      Counter app
      <Counter by="1"></Counter>
      <Counter by="2"></Counter>
      <Counter by="3"></Counter>
    </div>
    
  );
}


export default App;
