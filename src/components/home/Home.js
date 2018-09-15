import "./Home.scss";

import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <!-- Start Header Area --> */}
        <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="#home">
                    <img src="static/img/logo.png" alt="" />
                  </a>
                </div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="hide">
                    <a href="#home">Home</a>
                    <a href="javascript:void()"><Link to="/doctor">Doctor</Link></a>
                    <a href="javascript:void()"><Link to="/patient">Patient</Link></a>
                    <a href="#appoinment">Appoinment</a>
                    <a href="#consultant">Consultants</a>
                  </nav>
                  <div className="menu-bar">
                    <span className="lnr lnr-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- End Header Area --> */}

        {/* <!-- start banner Area --> */}
        <section className="banner-area relative" id="home">
          <div className="container">
            <div className="row fullscreen align-items-center justify-content-center">
              <div className="banner-content col-lg-6 col-md-12">
                <h1 className="text-uppercase">
                  We are the team <br />
                  of excellence
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="primary-btn2 mt-20 text-uppercase ">
                  Get Started
                  <span className="lnr lnr-arrow-right" />
                </button>
              </div>
              <div className="col-lg-6 d-flex align-self-end img-right">
                <img className="img-fluid" src="static/img/header-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}

        {/* <!-- Start fact Area --> */}
        <section className="facts-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 single-fact">
                <h2 className="counter">2536</h2>
                <p className="text-uppercase">Clients Served</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h2 className="counter">6784</h2>
                <p className="text-uppercase">X-rays Done</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h2 className="counter">1059</h2>
                <p className="text-uppercase">Worldwide stuff</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h2 className="counter">2239</h2>
                <p className="text-uppercase">Lives Saved</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end fact Area --> */}

        {/* <!-- start footer Area --> */}
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-2  col-md-6">
                <div className="single-footer-widget">
                  <h6>Top Products</h6>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Managed Website</a>
                    </li>
                    <li>
                      <a href="#">Manage Reputation</a>
                    </li>
                    <li>
                      <a href="#">Power Tools</a>
                    </li>
                    <li>
                      <a href="#">Marketing Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4  col-md-6">
                <div className="single-footer-widget mail-chimp">
                  <h6 className="mb-20">Contact Us</h6>
                  <p>
                    56/8, bir uttam qazi nuruzzaman road, west panthapath,
                    kalabagan, Dhanmondi, Dhaka - 1205
                  </p>
                  <h3>012-6532-568-9746</h3>
                  <h3>012-6532-568-97468</h3>
                </div>
              </div>
              <div className="col-lg-6  col-md-12">
                <div className="single-footer-widget newsletter">
                  <h6>Newsletter</h6>
                  <p>
                    You can trust us. we only send promo offers, not a single
                    spam.
                  </p>
                  <div id="mc_embed_signup">
                    <form
                      target="_blank"
                      noValidate={true}
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                      method="get"
                      className="form-inline"
                    >
                      <div className="form-group row" style={{ width: "100%" }}>
                        <div className="col-lg-8 col-md-12">
                          <input
                            name="EMAIL"
                            placeholder="Enter Email"
                            required=""
                            type="email"
                          />
                          <div style={{ position: 'absolute', left: "-5000px" }}>
                            <input
                              name="b_36c4fd991d266f23781ded980_aefe40901a"
                              tabIndex="-1"
                              value=""
                              type="text"
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                          <button className="nw-btn primary-btn">
                            Subscribe
                            <span className="lnr lnr-arrow-right" />
                          </button>
                        </div>
                      </div>
                      <div className="info" />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row footer-bottom d-flex justify-content-between">
              <p className="col-lg-8 col-sm-12 footer-text m-0">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
              <div className="col-lg-4 col-sm-12 footer-social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
