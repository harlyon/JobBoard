import React, { Component } from 'react';

class AddJob extends Component {
  render() {
    return (
      <div>
      <section class="">
		    <div class="container">
			    <div class="row justify-content-center">
          <div className="col-sm-12 col-lg-8 col-xl-9">
        <div className="my_profile_form_area">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="fz20 mb20">Post a New Job</h4>
            </div>
            <div className="col-lg-12 mt30">
              <div className="my_profile_thumb_edit" />
            </div>
            <div className="col-lg-12">
              <div className="my_profile_input form-group">
                <label htmlFor="formGroupExampleInput2">Job Title</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="UX/UI Desginer" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="my_resume_textarea">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Job Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={9} defaultValue={"Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present\n\t\t\t\t\t\t\t\t\t    "} />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="my_profile_input form-group">
                <label htmlFor="formGroupExampleInputDate">Application Deadline Date</label>
                <input type="number" className="form-control" id="formGroupExampleInputDate" placeholder="22/05/2010" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_input form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_input form-group">
                <label htmlFor="formGroupExampleInput1">Username</label>
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Job Type</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Specialisms</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="exampleFormControlInput3">Offerd Salary</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="exampleFormControlInput4">Career Level</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Experience</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Gender</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Industry</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="formGroupExampleInput1">Qualification</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-lg-12">
              <h4 className="fz18 mb20">Address / Location</h4>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="exampleFormControlInput9">Country</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="my_profile_select_box form-group">
                <label htmlFor="exampleFormControlInput9">City</label><br />
                <input type="text" className="form-control" id="formGroupExampleInput1" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="my_resume_textarea">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea2">Full Address</label>
                  <textarea className="form-control" id="exampleFormControlTextarea2" rows={3} defaultValue={"London, United Kingdom"} />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="my_profile_input form-group">
                <label htmlFor="exampleInputLat">Latitude</label>
                <input type="email" className="form-control" id="exampleInputLat" aria-describedby="latNumber" placeholder="51.5073509" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="my_profile_input form-group">
                <label htmlFor="exampleInputLat2">Longitude</label>
                <input type="email" className="form-control" id="exampleInputLat2" aria-describedby="latNumber" placeholder="-0.12775829999998223" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="my_profile_input form-group">
                <label htmlFor="exampleInputLat3">Zoom</label>
                <input type="email" className="form-control" id="exampleInputLat3" aria-describedby="latNumber" placeholder={16} />
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="h300" id="map-canvas" />
            </div> */}
            <div className="col-lg-4">
              <div className="my_profile_input">
                <a className="btn btn-lg btn-thm" href="#">Save Changes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default AddJob;