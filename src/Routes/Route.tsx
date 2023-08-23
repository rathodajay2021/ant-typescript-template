//CORE
import React, { useEffect } from "react";
import { Routes, Route as ReactRoute, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//CUSTOM
import { Login } from "Components/Pages/Login";
import { URL_DASHBOARD, URL_LOGIN, URL_SIGN_IN } from "Helpers/Path";
import { IRootState } from "Redux/store";
import RoutesList from "./RouteList";
import ProtectedRoute from "./ProtectedRoute";

const BEFORE_LOGIN_ACCESSIBLE_PATHS = [URL_LOGIN, URL_SIGN_IN];

const Route = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: IRootState) => state.Auth.isLoggedIn);

  useEffect(() => {
    if (
      isLoggedIn &&
      BEFORE_LOGIN_ACCESSIBLE_PATHS.includes(window?.location?.pathname)
    ) {
      navigate(URL_DASHBOARD);
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <ReactRoute path={URL_SIGN_IN} element={<Login />} />
      <ReactRoute path={URL_LOGIN} element={<Login />} />
      {RoutesList.map((route, index) => (
        <React.Fragment key={index}>
          {route.hasChildren ? (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            >
              {route.children}
            </ReactRoute>
          ) : (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            />
          )}
        </React.Fragment>
      ))}
    </Routes>
  );
};

export default Route;
