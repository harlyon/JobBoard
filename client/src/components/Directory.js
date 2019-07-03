import React, { Component } from 'react';

class Directory extends Component {
  render() {
    return (
      <div>
      <section className="job-location pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ulockd-main-title">
                <h3 className="mt0">Browse Local Jobs</h3>
                <a className="text-thm float-right" href="#">Browse All Local Jobs</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/11.jpg" alt="9.jpg" /></div>
                <div className="details">
                  <h4>London</h4>
                  <h5>152,141</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/10.jpg" alt="10.jpg" /></div>
                <div className="details">
                  <h4>Manchester</h4>
                  <h5>586,478</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/12.jpg" alt="11.jpg" /></div>
                <div className="details">
                  <h4>Liverpool</h4>
                  <h5>15,258</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/13.jpg" alt="12.jpg" /></div>
                <div className="details">
                  <h4>Istanbul</h4>
                  <h5>152,141</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/14.jpg" alt="13.jpg" /></div>
                <div className="details">
                  <h4>New York</h4>
                  <h5>586,478</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="job_loc_img_box">
                <div className="thumb">
                <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/service/9.jpg" alt="14.jpg" /></div>
                <div className="details">
                  <h4>Los Angeles</h4>
                  <h5>15,258</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
    </section>
  </div>
    );
  }
}

export default Directory;