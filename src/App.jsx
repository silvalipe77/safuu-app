import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import Introduction from './components/sections/Introduction';
import Investiment from './components/sections/Investiment';
import Roadmap from './components/sections/Roadmap';
import Become from './components/sections/Become';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Introduction/>
      <Investiment/>
      <Roadmap/>
      <Become/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
