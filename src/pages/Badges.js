import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor");

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("3. DidMount");

    this.timeoutId = setTimeout(() => {
      this.setState({
        ...this.state,
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
          }
        ]
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. ComponenteDidUpdate()");
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2/4. Render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badge__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>
        <div className="Badges__list">
          <div className="Badges_container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;