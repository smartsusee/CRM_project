import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let hasstoken = JSON.parse(localStorage.getItem("auth"));

  return hasstoken !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
