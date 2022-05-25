import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';

function App() {
  return (
    <div className="container">
        <Aside></Aside>
        <Main></Main>
        <RightAside></RightAside>
    </div>
  );
}

export default App;
