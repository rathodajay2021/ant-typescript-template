//PATH
import { URL_DASHBOARD } from "Helpers/Path";

//TYPE
import { RouteListType } from "Helpers/TypeConstants";

//COMPONENT
import { Dashboard } from "Components/Pages/Dashboard";

const RoutesList:RouteListType = [
  {
    path: URL_DASHBOARD,
    exact: true,
    Component: <Dashboard />,
    hasChildren: false
  },
];

export default RoutesList;
