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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import Payment from './Component/Payment/Payment';
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
            <PrivateRoute path='/details/:serviceId'>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/appointment'>
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
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
