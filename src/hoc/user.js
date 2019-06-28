import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "My account",
    linkTo: "/user/dashboard"
  },
  {
    name: "User information",
    linkTo: "/user/updateProfile"
  },
  {
    name: "My Cart",
    linkTo: "/cart"
  }
];
class UserLayout extends React.Component {
  state = {
    acount: false,
    profile: false
  };
  render() {
    const generateLinks = links =>
      links.map((item, i) => (
        <Link to={item.linkTo} key={i}>
          {item.name}
        </Link>
      ));

    return (
      <div className="container">
        <div className="user_container">
          <div className="user_left_nav">
            <h2>My Account</h2>
            <div className="links">{generateLinks(links)}</div>
          </div>
          <div className="user_right">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default UserLayout;
