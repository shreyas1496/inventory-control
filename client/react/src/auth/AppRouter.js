import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsPage from "../products/components/ProductsPage";
// import LoginPage from "./LoginPage";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <div>
          <span>
            <Link to="/products">Products</Link>
          </span>{" "}
        </div>
      </nav>
      <div className="routes">
        <Route path="/products" component={ProductsPage} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
