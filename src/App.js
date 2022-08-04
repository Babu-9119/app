import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div className="App">
      <Greet login = "login" logout = "logout"/>
      <Assignment />
    </div>
  );
}

export default App;
