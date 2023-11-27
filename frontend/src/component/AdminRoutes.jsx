import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" />
  );
};

export default AdminRoutes;
