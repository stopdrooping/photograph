import logo from './logo.svg';
import './App.css';
import './style.css';
import Checkbuttons from './components/checkbuttons.jsx';
import Header from './components/header.jsx';
import Mains from './components/mains.jsx';
import Nav from './components/nav.jsx';
import Servises from './components/servises.jsx';
function App() {
  return (
  <>
  <Checkbuttons/>
  <Nav/>
  <Header/>
    <main>
    <Servises/>
    <Mains/>
    </main>
  </>
  )
}


export default App;
