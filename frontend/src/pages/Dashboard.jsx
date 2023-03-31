import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return <h1>Dashboard</h1>;
}

export default Dashboard;

export const dashboardLoader = async () => {
  const resonce = await axios.get("http://localhost:3000/api/v1/auth/me");

  return resonce.data;
};
