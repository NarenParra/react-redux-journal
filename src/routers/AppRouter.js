import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebaseCOnfig";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "../routers/PrivateRoute";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { Preloader } from "../components/preloader/Preloader";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  //preloader para enrutamiento
  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //mantiene la sesion en el state de redux
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <Preloader />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
