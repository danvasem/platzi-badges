import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filtra los Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {filteredBadges.length === 0 ? (
        //Caso en el cual no hay datos
        <div>
          <h3>No encontramos ningún data</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crea tu primer Badge!!
          </Link>
        </div>
      ) : (
        //Caso en el cual hay datos
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <Badge {...badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BadgesList;
