//CORE
import { Fragment } from "react";
import { Navigate } from "react-router-dom";

//CUSTOM
import { ProtectedRouteType } from "Helpers/TypeConstants";
import { IRootState } from "Redux/store";
import { useSelector } from "react-redux";
import { URL_LOGIN } from "Helpers/Path";

const ProtectedRoute = (props: ProtectedRouteType) => {
  const isLoggedIn = useSelector((state: IRootState) => state.Auth.isLoggedIn);

  return (
    <div style={{ height: "inherit" }}>
      {!isLoggedIn ? (
        <Navigate replace to={URL_LOGIN} />
      ) : (
        <Fragment>{props.children}</Fragment>
      )}
    </div>
  );
};

export default ProtectedRoute;
