import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {}
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    this.setState({
      loading: true,
      error: null
    });
    e.preventDefault();
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
        error: null
      });

      this.props.history.push("/badges"); //Para programaticamente ir a otra página utilizando React Router
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <h1>Nuevo Asistente</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
