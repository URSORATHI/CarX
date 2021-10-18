import React from "react";
import "./style.css";

export default function Footer() {
  const mystyle = {
    visibility: "visible",
    animationDelay: "0.2s",
    animationName: "fadeInLeft",
  };
  const mystyle2 = {
    visibility: "visible",
    animationDelay: "0.4s",
    animationName: "fadeInLeft",
    // visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;
  };
  const mystyle3 = {
    visibility: "visible",
    animationDelay: "0.6s",
    animationName: "fadeInLeft",
    //  "visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
  };
  const mystyle4 = {
    visibility: "visible",
    animationDelay: "0.8s",
    animationName: "fadeInLeft",
    //  "visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
  };
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={mystyle}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>
                    Don’t miss any updates of our new templates and extensions.!
                  </p>
                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    novalidate="true"
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                    <p
                      className="mchimp-errmessage"
                      style={{ display: "none" }}
                    ></p>
                    <p
                      className="mchimp-sucmessage"
                      style={{ display: "none" }}
                    ></p>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={mystyle2}
                >
                  <h3 className="f-title f_600 t_color f_size_18">About</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">AboutUs</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Signup</a>
                    </li>
                    <li>
                      <a href="/">Login</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={mystyle3}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Term &amp; conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={mystyle4}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Follow us</h3>
                  <div className="f_social_icon">
                    {/* <a href="/" className="fa fa-facebook"></a>
                                <a href="/" className="fa fa-twitter"></a>
                                <a href="/" className="fa fa-linkedin"></a>
                                <a href="/" className="fa fa-pinterest"></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © CarX Inc.. 2021 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with <i className="icon_heart"></i> in{" "}
                  <a href="/">CarX</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
