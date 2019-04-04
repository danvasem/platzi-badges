import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  constructor(props) {
    super(props);
    console.log("1. Constructor");
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        data: undefined,
        error: error
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. ComponenteDidUpdate()");
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
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
            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
