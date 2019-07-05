import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    return (
        <section>
          <section className="our-faq bgc-fa">
            <div className="container">
              <div className="row">
              <div class="col-md-6 col-lg-6">
              <h1 className="justify-content-center">Available Jobs</h1>
                  <div class="candidate_job_alart_btn pjlv3 mb10">
                    <h4 class="fz20 mb15">20 Jobs Found</h4>
                    <a class="btn btn-thm" href="/"><span class="flaticon-mail"></span> Get Job Alerts</a>
                    <button class="btn btn-thm btns ml10 fr-xsd">Show Filter</button>
                  </div>
                </div>
              <div className="col-xl-12">
              <div className="col-lg-6 col-xl-4">
                <div className="fj_post style3">
                  <div className="details">
                    <div className="thumbs">
                      <img className="img-fluid" src="https://grandetest.com/theme/careerup-html/images/partners/l1.jpg" alt="l1.jpg" />
                    </div>
                    <h5 className="job_chedule text-thm2">Full Time</h5>
                    <h4>JEB Product Sales Specialist Russia &amp; CIS</h4>
                    <p>Posted 23 August</p>
                    <div className="featurej_post mt40">
                      <p><a href="/">Bothell, WA, USA</a></p>
                      <a className="btn btn-transparent" href="/">Browse Job</a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
          </section>
        </section>
    );
  }
}

export default Jobs;