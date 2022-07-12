import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App(props) {
  console.log("APP" + props)
  return (
    <div className="App">
      <NavBar cart={props.cart} />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
