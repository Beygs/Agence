import { NavLink, Outlet } from "react-router-dom";
import data from "./data";

const Works = () => (
  <div className="Works">
    <h1>Works</h1>
    <ul className="workItems">
      {data.map((d) => (
        <li className="workItem">
          <NavLink
            to={d.path}
            key={d.path}
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
