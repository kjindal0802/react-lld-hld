import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import Result from "./Components/Result";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Step1} />
      <Route exact path="/step2" component={Step2} />
      <Route exact path="/step3" component={Step3} />
      <Route exact path="/step4" component={Step4} />
      <Route exact path="/result" component={Result} />
    </Router>
  );
}
