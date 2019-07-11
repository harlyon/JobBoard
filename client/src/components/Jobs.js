import React, { Component } from "react";
import { addJob } from "../utils/utils";

class Jobs extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.allJobs();
  }

  allJobs = () => {
    addJob().then(res => {
      this.setState({ jobs: res });
      console.log(res);
    });
  };

  render() {
    return (
      <section>
        <section className="our-faq bgc-fa">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <h1 className="justify-content-center">Available Jobs</h1>
                <div className="candidate_job_alart_btn pjlv3 mb10">
                  <h4 className="fz20 mb15">20 Jobs Found</h4>
                </div>
              </div>
              {this.state.jobs.forEach(job => {
                return console.log(job.address);
              })}
              <div className="col-xl-12">
                <div className="col-lg-6 col-xl-4">
                  <div className="fj_post style3">
                    <div className="details" style={{ paddingTop: "30px" }}>
                      <h2>JEB Product Sales Specialist Russia &amp; CIS</h2>
                      <div className="featurej_post mt20">
                        <p>
                          <a href="/">Bothell, WA, USA</a>
                        </p>
                        <hr />
                      </div>
                      <p>Posted 23 August</p>
                      <h5 className="job_chedule text-thm2">Full Time</h5>
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
