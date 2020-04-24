import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import GetErrors from './components/Errors/errors';
import LoginPage from './components/Containers/Login/LoginForm';
import ForgetPassword from './components/Containers/ForgotPassword/ForgotPassword';
import RegisterForm from './components/Containers/RegisterForm/RegisterForm';
import Grid from './components/Containers/Grid/Grid'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
         
            <ToastContainer />
            
              <Router>
                <Switch>
                  <Route exact path='/' component={LoginPage} />
                  <Route path='/pagenotfound' component={PageNotFound} />
                  <Route path='/forgotpassword' component={ForgetPassword} />
                  <Route path='/registerform' component={RegisterForm} />
                  <Route path='/grid' component={Grid} />
                  <Route path='/errors' component={GetErrors} />
                </Switch>
              </Router>
          

      </div>
    )
  }
}


export default App;
