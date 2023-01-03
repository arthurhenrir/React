import './App.css';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <FirstComponent/>
      <Hooks/>
      <List/>
      <RenderCond x={6} y={10}/>
      <Fragment/>
      <Container>
          <h1>Filho do container!!</h1>
      </Container>
    </div>
  );
}

export default App;
