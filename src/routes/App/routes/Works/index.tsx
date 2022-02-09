import { NavLink, Outlet } from "react-router-dom";
import data from "./data";

const Works = () => (
  <main className="Works">
    <h2>
      <NavLink to="/works">
        Works
      </NavLink>
    </h2>
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
  </main>
);

export default Works;
