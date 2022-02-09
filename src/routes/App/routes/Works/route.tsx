import routes from "shared/constants/routes";
import Works from ".";
import WorkRoute from "./routes/StudyCase/route";

export default {
  path: routes.WORKS.route,
  element: <Works />,
  children: [
    WorkRoute,
  ],
};
