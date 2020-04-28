import React, { Component } from "react";
import "./LoginForm.css";
import TabGrid from "../common/TabGrid";
import UserLogin from "./UserLogin";
import loginImage from "../../../media/icons/login.png";
import SSOLogin from "./SSOLogin";
import Button from "../common/Button";
import * as rk from '../../../localization/resourceKeys'
import { withTranslation } from 'react-i18next';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SSO: true
    };
  }

  registerOnClick = e => {
    console.log(this.props.history);
    this.props.history.push("/registerform");
    localStorage.setItem("token", "tharun");
    console.log(localStorage.getItem("token"));
  };

  
  hideButton = eventKey => {
    this.setState({
      SSO: eventKey === "user" ? true : false
    });
  };
  render() {
    const loginTab = [
      { eventKey: "user", title: "User login", comp: <UserLogin /> },
      { eventKey: "sso", title: "SSO login", comp: <SSOLogin /> }
    ];
      const {t} = this.props;
    return (
      
      <div className="app-content container">
        <div className="login-holder">
          <div className="login-inner">
            <div className="login-box">
              <div className="login-image">
                <img src={loginImage}></img>
              </div>
            </div>
            <div className="login-box">
              <div className="login-form">
                <h4 className="header">{t(rk.LOGINFORM.LOGINTEXT)}</h4>
                <p>{t(rk.LOGINFORM.WELCOME)}</p>
                <div className='tab-holder'>
                <TabGrid
                  tabs={loginTab}
                  hideButton={this.hideButton}
                  {...this.props}
                ></TabGrid>
                </div> 
                
                  {this.state.SSO ? (
                    <div className="btn-holder">
                      <Button
                        type="submit"
                        id="register-btn"
                        className="btn-purple"
                        onClick={this.registerOnClick}
                        value={t(rk.BUTTON.REGISTER)}
                      ></Button>
                    </div>
                  ) : (
                    ""
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(LoginForm);
