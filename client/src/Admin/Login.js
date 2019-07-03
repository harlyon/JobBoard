import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
      <section className="our-log-reg bgc-fa">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6">
              <div className="login_form">
                <form action="#">
                  <div className="heading">
                    <h3 className="text-center">Quick Login</h3>
                    <p className="text-center">Don't have an account? <a className="text-thm" href="#">Sign Up!</a></p>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    <a className="tdu text-thm float-right" href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" className="btn btn-log btn-block btn-thm">Login</button>
                  <hr />
                  <div className="row mt40">
                    <div className="col-lg">
                      <button type="submit" className="btn btn-block color-white bgc-fb"><i className="fa fa-facebook float-left mt5" /> Facebook</button>
                    </div>
                    <div className="col-lg">
                      <button type="submit" className="btn btn-block color-white bgc-gogle"><i className="fa fa-google float-left mt5" /> Google</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div></div></section>
      </div>
    );
  }
}

export default Login;