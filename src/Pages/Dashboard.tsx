import DataChart from "../Component/DataChart";
import Layout from "../Component/Layout";

const Dashboard = () => {
  return (
    <div>
     <Layout
     title="Dashboard"
     >
      <div className="m-5">

      <DataChart/>
      </div>

     </Layout>
    </div>
  );
};

export default Dashboard;
