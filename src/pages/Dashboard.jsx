import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function Dashboard() {
  const { token } = useContext(BlogContext);
  // console.log(token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Dashboard: Protected Content Here</h1>;
}

export default Dashboard;
