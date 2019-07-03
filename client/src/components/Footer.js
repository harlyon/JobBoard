import React from 'react';

const Footer = () => {
  return (
      <div>
        <section className="footer_bottom_area p0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pb10 pt10">
              <div className="copyright-widget tac-smd mt20">
                <p>© 2019. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-8 pb10 pt10">
              <div className="footer_menu text-right mt10">
                <ul>
                  <li className="list-inline-item"><a href="page-terms-and-policies.html">Site Map</a></li>
                  <li className="list-inline-item"><a href="page-terms-and-policies.html">Privacy Policy</a></li>
                  <li className="list-inline-item"><a href="page-terms-and-policies.html">Terms of Service</a></li>
                  <li className="list-inline-item"><a href="page-terms-and-policies.html">Security &amp; Privacy</a></li>
                  <li className="list-inline-item">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Footer;