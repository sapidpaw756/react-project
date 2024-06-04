
import Header from './template/Header';
import Home from './template/Home';
import About from './template/About';
import Skills from './template/Skills';
import './scss/core.scss';
import './scss/helpers.scss';

function App() {
  return (
    [<Header/>, <Home/>, <About/>, <Skills/>]
  );
}

export default App;
