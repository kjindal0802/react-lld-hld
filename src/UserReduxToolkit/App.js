import Login from "./Login";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Router>
        {/* <Route exact path="/" render={() => <h1>Home</h1>} /> */}
        <PublicRoute exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Router>
    </>
  );
}
