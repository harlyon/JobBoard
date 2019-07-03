import React, { Component } from 'react';
import Search from './Search';
import Directory from './Directory';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="home-one style2 bgc-white">
        <div className="container">
          <div className="row home-content">
            <div className="col-lg-12">
              <div className="find-cand-sec">
                <div className="mockup-top">
                  <img className="animute"
                      src="https://grandetest.com/theme/careerup-html/images/home/home2_bg.png"
                      alt="board"
                    />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="home-text">
                <h2 className="fz40">Find The Job That Fits Your Life</h2>
                <p>Each month, more than 7 million jobseekers turn to website in their search for work, making over 160,000 applications every day.</p>
              </div>
            </div>
            <div className="col-lg-12">
            <Search />
            </div>
          </div>
        </div>
      </section>
      <Directory />
      </div>
    );
  }
}

export default Home;