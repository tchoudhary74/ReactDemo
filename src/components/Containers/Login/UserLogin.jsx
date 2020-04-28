import React, { Component } from "react";
import CheckBox from "../common/CheckBox";
import { Api_login } from "../../../API/Api_login";
import { toast } from "react-toastify";
import Input from "../common/InputTextBox";
import { Link } from "react-router-dom";
import * as rk from "../../../localization/resourceKeys";
import { withTranslation } from "react-i18next";
import Button from "../common/Button";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        username: "",
        password: ""
      },

      error: {
        username: "",
        password: ""
      },
      checkbox: false
    };
  }

  submitOnClick = e => {
    let objApiLogin = new Api_login();
    const result = objApiLogin.validateUser(this.state.login);
    result
      .then(response => {
        console.log(response);
        const { data } = response;
        const { token } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("isChecked", true);
        toast.success("Login Succesfully");
        console.log(this.props)
        this.props.history.push("/home");
        console.log(token);
      })
      .catch(error => {
        console.log('data',error);
        if (error.request.status === 400)
          toast.error(error.response.data.error);
      });
  };

  onChange = e => {
    const { login, error } = this.state;
    login[e.currentTarget.name] = e.currentTarget.value;
    const emailVal = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    if (login[e.currentTarget.name] === "") {
      error[e.currentTarget.name] = `Please enter ${e.currentTarget.name}`;
    } else if (
      e.currentTarget.name === "username" &&
      !emailVal.test(login[e.currentTarget.name])
    ) {
    } else {
      error[e.currentTarget.name] = "";
    }
    this.setState({
      login,
      error
    });
    localStorage.removeItem("token");
  };

  checkBoxOnchange = e => {};
  render() {
    const { t } = this.props;
    const { login, error } = this.state;
    const { username, password } = login;
    const { username: eusername, password: epassword } = error;
    return (
      <div>
        <ul>
          <li>
            <Input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={this.onChange}
              placeholder={t(rk.LOGINFORM.EMAILHOLDER)}
              name="username"
            ></Input>
            <span>{eusername}</span>
          </li>
          <li>
            <Input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={this.onChange}
              placeholder={t(rk.LOGINFORM.PASSWORDHOLDER)}
              name="password"
            ></Input>
            <span>{epassword}</span>
          </li>
          <li className="btn-holder">
            <div>
              <CheckBox
                type="checkbox"
                id="checkBox"
                className="check-box"
                onChange={this.checkBoxOnchange}
                checked={this.state.checkBox}
              ></CheckBox>
            </div>
            <div>
              <Link className="forgotPassword" to="/forgotpassword">
                {t(rk.LOGINFORM.FORGOTPASSWORD)}
              </Link>
            </div>
            <div>
              <Button
                type="submit"
                id="submit-btn"
                className="btn-purple"
                onClick={this.submitOnClick}
                value={t(rk.BUTTON.LOGIN)}
              ></Button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withTranslation()(UserLogin);
