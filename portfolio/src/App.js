
import Header from './template/Header';
import Home from './template/Home';
import Skills from './template/Skills';
import './scss/core.scss';
import './scss/helpers.scss';

function App() {
  return (
    [<Header/>, <Home/>, <Skills/>]
  );
}

export default App;
