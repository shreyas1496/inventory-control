import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router-dom';

// const PrivateRoute = (props) => {
//   const { component: Component, isLoggedIn, path, ...rest } = props;
//   if (isLoggedIn) {
    
//     if (window.location.pathname.replace(/\/$/, "") === path.replace(/\/$/, "")) {
//       return <Component {...rest} path={path} />
//     } else {
//       return <div></div>
//     }
//   } else {
//     return (<Redirect
//       to={{
//         pathname: "/login",
//         state: { from: props.location }
//       }}
//     />)
//   }
// }

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const ret = isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
        console.log(ret);
        return ret;
      }
      }
    />
  );
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(withRouter(PrivateRoute));