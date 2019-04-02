import React from "react";

class BadgeForm extends React.Component {
  handleChange = e => {};

  handleClick = e => {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Nuevo Asistente</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="FirstName"
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
