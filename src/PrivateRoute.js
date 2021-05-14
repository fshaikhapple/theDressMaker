import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    const isLoggedIn = useSelector(state => state?.authReducer?.adminLoggedIn)

    const condition = true;

    return condition ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/login" />);
};
export default PrivateRoute;