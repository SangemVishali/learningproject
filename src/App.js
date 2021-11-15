import logo from './logo.svg';
import './App.css';
import  { Greet } from './Components/Greet';
import Welcome from './Components/Welcome';
import Exjsx from './Components/Exjsx';
import Exstate from './Components/Exstate';
function App() {
  return (
    <div className="App">
      <Exstate></Exstate>
      {/*<Greet name='Vishali' fullName='Sangem Vishali'>
        <p>Learning react</p>
      </Greet>
      <Welcome name='Vishali' fullName='Sangem Vishali'></Welcome> 
      {/*<Exjsx /> */}
    </div>
  );
}

export default App;
