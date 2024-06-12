import './App.css';
import Home from './components/pages/Home';
import { Footer } from './components/shared_layouts/Footer';
import Header from './components/shared_layouts/Header';

function App() {
  return (
  <>
    <Header/>
    <Home/>
    <Footer/>
  </>
  );
}

export default App;
