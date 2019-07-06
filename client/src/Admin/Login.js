import React, { Component } from "react";
import { login } from "../utils/utils";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  login = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/profile`);
      } else {
        this.setState({ error: res.error });
      }
    });
  };

  render() {
    return (
      <section style={{ paddingTop: "170px" }}>
        <section className="our-log-reg bgc-fa">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-lg-6">
                <div className="login_form">
                  <form noValidate onSubmit={this.login}>
                    <div className="heading">
                      <h3 className="text-center">Quick Login</h3>
                      <p className="text-center">
                        Don't have an account?{" "}
                        <a className="text-thm" href="/">
                          Sign Up!
                        </a>
                      </p>
                    </div>
                    <div
                      className="alert alert-danger"
                      style={{
                        visibility:
                          this.state.error !== "" ? "visible" : "hidden"
                      }}
                    >
                      {this.state.error}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        name="email"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        name="password"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-log btn-block btn-thm"
                    >
                      Login
                    </button>
                    <hr />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Login;
