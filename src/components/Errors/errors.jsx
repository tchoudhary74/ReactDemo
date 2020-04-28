import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import * as rk from '../../localization/resourceKeys'
import "./errors.css";

class GetErrors extends Component {
    constructor(props) {
        super(props);
        this.onUnload = this.onUnload.bind(this);
    }

    onUnload(event) {
        event.preventDefault();
        localStorage.removeItem('path');
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload);
        const path = localStorage.getItem('path')
        if (!path && this.props.location.state) {
            localStorage.removeItem(this.props.location.state.path)
            this.props.history.push('/')
        }
        const _this = this;
        // Hey, a popstate event happened!
        window.addEventListener("popstate", e => {
            // Nope, go back to your page
            sessionStorage.clear();
            console.log(_this.props.history);
            if(_this.props.history)
            _this.props.history.push('/');
            else
            window.location.href = '/';
        });
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);
        localStorage.setItem('path', '');
    }

    render() {
        const { t } = this.props;
        return (
          <>
            <div className="row errorText">
              <div className="col-md-12 text-center">
                <p>{'text'}</p>
                <p>{'text1'}<a href='/'>{"text2"}</a>{'text3'}</p>
              </div>
            </div>
          </>
        )
    }
}

export default withTranslation()(GetErrors);