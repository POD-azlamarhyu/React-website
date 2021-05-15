import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
      </Router>
      <Router>
        <Footer>
          <Switch>
          </Switch>
        </Footer>
      </Router>
    </div>
  );
}

export default App;
