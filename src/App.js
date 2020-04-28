import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import GetErrors from './components/Errors/errors';
import LoginPage from './components/Containers/Login/LoginForm';
import ForgetPassword from './components/Containers/ForgotPassword/ForgotPassword';
import RegisterForm from './components/Containers/RegisterForm/RegisterForm';
import HomePage from './components/Containers/Index/HomePage'
import Grid from './components/Containers/Grid/Grid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FeaturePage from './components/Containers/Index/FeaturePage';
import PricingPage from './components/Containers/Index/PricingPage';
import UserLogin from "./components/Containers/Login/UserLogin";




class App extends Component {
  render() {
    return (
      <div >
         
            <ToastContainer />
            
              <Router>
                <Switch>
                  <Route exact path='/' component={LoginPage} />
                  <Route path='/pagenotfound' component={PageNotFound} />
                  <Route path='/user' component={UserLogin} />
                  <Route path='/forgotpassword' component={ForgetPassword} />
                  <Route path='/registerform' component={RegisterForm} />
                  <Route path ='/features' component={FeaturePage}/>
                  <Route path ='/pricing' component={PricingPage}/>
                  <Route path='/home' component={HomePage} />
                  <Route path='/grid' component={Grid} />
                  <Route path='/errors' component={GetErrors} />
                </Switch>
              </Router>
          

      </div>
    )
  }
}


export default App;
