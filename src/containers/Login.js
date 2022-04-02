import React, { Component } from "react";
import PropTypes from "prop-types";
// import Ionicon from "react-ionicons";
import logo from "../logo.svg";
import { withRouter } from "react-router-dom";
import withContext from "../WithContext";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tabView: tabsText[0],
      email: '',
      password: ''
    };
  }
  componentDidMount() {
    this.props.actions.getInitalData();
  }
  userLogin = (event) => {
    const email = this.emailInput.value.trim()
    const password = this.passwordInput.value.trim()
    console.log(email, password)
    this.props.actions.userLogin(email, password).then(() => {
      this.props.history.push("/home")
    })
    event.preventDefault()
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="App-header">
          <div className="row mb-5 justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h4>登陆</h4>
          <form>
            <div>
              <div className="form-group">
                <label>邮箱</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={(input) => {this.emailInput = input}}
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  我们永远不会与其他人分享您的电子邮件。
                </small>
              </div>
              <div className="form-group">
                <label>密码</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  ref={(input) => {this.passwordInput = input}}
                ></input>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(event) => {this.userLogin(event)}}
              >
                登陆
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withRouter(withContext(Login));
