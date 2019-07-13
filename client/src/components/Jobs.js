import React, { Component } from "react";
import { allJob } from "../utils/utils";
import { Link } from "react-router-dom";
import Search from "./Search";

class Jobs extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    allJob().then(res => {
      this.setState({ jobs: res });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <div className="home-one style2 bgc-white">
          <div className="container">
            <div className="row home-content">
              <div className="col-lg-12">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <section className="our-faq bgc-fa pt10">
          <div className="container">
            <div className="row">
              {this.state.jobs.reverse().map(job => {
                return (
                  <div key={job._id} className="col-md-6 col-xl-4">
                    <div className="fj_post style3">
                      <div className="details" style={{ paddingTop: "30px" }}>
                        <h2 className="job_chedule text-thm2">
                          {job.company_name}
                        </h2>
                        <h4>{job.job_title}</h4>
                        <div className="featurej_post mt20">
                          <p>
                            <a href="/">
                              {job.city}, {job.country}
                            </a>
                          </p>
                          <hr />
                        </div>
                        <p>Posted {job.createdAt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Jobs;
