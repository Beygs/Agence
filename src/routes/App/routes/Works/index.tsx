import { NavLink, Outlet } from "react-router-dom";
import data from "./data";

const Works = () => (
  <div className="Works">
    <h2>
      <NavLink to="/works">
        Works
      </NavLink>
    </h2>
    <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
    <p>
      Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
    </p>
    <ul className="workItems">
      {data.map((d) => (
        <li className="workItem" key={d.path}>
          <NavLink
            to={d.path}
            style={({ isActive }) => (
              {
                color: isActive ? "hsl(14, 84%, 48%)" : "",
              }
            )}
          >
            {d.name}
          </NavLink>
        </li>
      ))}
    </ul>
    <Outlet />
  </div>
);

export default Works;
