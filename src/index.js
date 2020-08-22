
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import Ramakien from "views/Gallary/Ramakien.js"
import Disney from "views/Gallary/Disney.js"
import ThaiBook from "views/Gallary/Thaibook.js"
import Longka from "views/Gallary/Longka.js"

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/ramakien"
        render={(props) => <Ramakien {...props} />}
      />
      <Route
        path="/disney"
        render={(props) => <Disney {...props} />}
      />
      <Route
        path="/thaibook"
        render={(props) => <ThaiBook {...props} />}
      />
      <Route
        path="/longka"
        render={(props) => <Longka {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
