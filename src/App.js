import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route path='/home'>
                {/* <Home></Home> */}
            </Route>
            <Route exact path='/'>
                {/* <Home></Home> */}
            </Route>
            <Route path='/services'>
                {/* <Services></Services> */}
            </Route>
            <Route path='/about'>
              {/* <About></About> */}
            </Route>
            <Route path='/contact'>
              {/* <Contact></Contact> */}
            </Route>
            <Route path='*'>
                {/* <Notfound></Notfound> */}
            </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
