import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import Notfound from './Component/NotFound/NotFound';
import About from './Component/About/About';
import AuthProvider from './Context/AuthProvider';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/services'>
                <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
          </Route>
            <Route path='*'>
                <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
