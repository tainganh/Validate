import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { AutoComplete, Avatar, Input, Icon, Badge } from "antd";
class Header extends Component {
  state = {
    dataSource: [
      "Z1000",
      "Z800",
      "CBR1000",
      "BMW S1000RR",
      "BMW",
      "HONDA",
      "YAMAHA",
      "SUZUKI",
      "KAWASAKI"
    ],
    textSearch: "",
    open: false,
    user: [
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false
      },
      {
        name: "Login",
        linkTo: "/register_login",
        className: "glyphicon glyphicon-log-in",
        public: true
      },
      {
        name: "Register",
        linkTo: "/register",
        className: "glyphicon glyphicon-book",
        public: true
      },
      {
        name: "Logout",
        linkTo: "/user/logout",
        className: "glyphicon glyphicon-log-out",
        public: false
      }
    ]
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userData.isAuth) {
      this.setState({
        isAuth: true
      });
    }
  }
  logOut = () => {};
  defaultLink = (item, i) =>
    item.name === "Logout" ? (
      <li key={i} onClick={this.logOut}>
        <i className={item.className} aria-hidden="true" />
        <a>{item.name}</a>
      </li>
    ) : item.name === "My Account" ? (
      <li key={i}>
        <i className={item.className} aria-hidden="true" />
        <Link to={item.linkTo}>
          <Avatar
            size="small"
            style={{ backgroundColor: "#87d068", marginRight: 5 }}
            icon="user"
          />
          <span style={{ color: "#d8703f" }}>
            {this.props.user.userData.name}
          </span>
        </Link>
      </li>
    ) : (
      <li key={i}>
        <i className={item.className} aria-hidden="true" />
        <Link to={item.linkTo}>{item.name}</Link>
      </li>
    );

  onSelect = value => {
    this.setState({
      textSearch: value
    });
  };
  handleSearch = value => {
    value
      ? this.setState({ open: true, textSearch: value })
      : this.setState({ open: false, textSearch: value });
  };

  onSearch = () => {
    this.props.history.push("/search");
  };
  render() {
    return (
      // <!-- header -->
      <div className="header">
        <div className="container">
          <div className="header-grid">
            <div
              className="header-grid-left animated wow slideInLeft"
              data-wow-delay=".5s"
            >
              <ul>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  />
                  <a href="mailto:taihtgcs15415@fpt.edu.vn">
                    taihtgcs15415@fpt.edu.vn
                  </a>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  />
                  +(84) 905 55 1967
                </li>
              </ul>
            </div>
            <div
              className="header-grid-right animated wow slideInRight"
              data-wow-delay=".5s"
            >
              <ul className="social-icons">
                <li>
                  <a href="#" className="facebook" />
                </li>
                <li>
                  <a href="#" className="twitter" />
                </li>
                <li>
                  <a href="#" className="g" />
                </li>
                <li>
                  <a href="#" className="instagram" />
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="logo-nav">
            <div
              className="logo-nav-left animated wow zoomIn"
              data-wow-delay=".5s"
            >
              <h1>
                <Link to="/">
                  Demo <span>Demo</span>
                </Link>
              </h1>
            </div>
            <div className="logo-nav-left1">
              <nav className="navbar navbar-default">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header nav_2">
                  <button
                    type="button"
                    className="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-megadropdown-tabs"
                >
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to="/" className="act">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
