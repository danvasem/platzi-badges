import React from "react";
import Badge from "./Badge";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Badge {...badge} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
