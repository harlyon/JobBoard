import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <div className="home-job-search-box mt20 mb20">
          <form className="form-inline">
            <div className="search_option_one">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control h70"
                  id="exampleInputName"
                  placeholder="Job Title or Keywords"
                />
              </div>
            </div>
            <div className="search_option_two">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control h70"
                  id="exampleInputEmail"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="search_option_button">
              <button type="submit" className="btn btn-thm btn-secondary h70">
                Search
              </button>
            </div>
          </form>
        </div>
        <p>
          <span className="color-black22">Trending Keywords:</span> DesignCer,
          Developer, Web, IOS, PHP, Senior, Engineer
        </p>
      </div>
    );
  }
}

export default Search;
