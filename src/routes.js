import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/layout";
import Register from "./components/Auth/register";

import Not_found from "./components/PageNot/not_found";
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route component={Not_found} />
      </Switch>
    </Layout>
  );
};

export default Routes;
