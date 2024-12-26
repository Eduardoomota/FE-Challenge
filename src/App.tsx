import Layout from "components/layout";
import Sidebar from "components/sidebar";
import { Router } from "routes";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Router />
    </Layout>
  );
}

export default App;
