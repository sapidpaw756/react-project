
import Header from './template/Header';
import Home from './template/Home';
import About from './template/About';
import Skills from './template/Skills';
import Experience from './template/Experience';
import Contact from './template/Contact';
import './scss/core.scss';
import './scss/helpers.scss';


const pages =[{id:0, page: Header}, {id:1, page: Home}, {id:2, page: About}, {id:3, page: Skills}, {id:4, page: Experience} ,{id:5, page: Contact}]

function App() {
  return (
    [pages.map(p => <div key={p.id}>
      <p.page/>
    </div>)]
  );
}

export default App;
