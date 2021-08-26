import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import EditClass from "./pages/class/EditClass";
import Get from "./pages/class/Get";
import Nav from "./pages/Nav/Nav";
import Calander from "./pages/clander/Calander";
import Login from "./pages/Conection/Login";
import signup from "./pages/Conection/Signup";
import "./App.css";

function PrivateRoute(props) {
	if (localStorage.getItem("token")) {
		//to check if user is admin we look at his id stored in localStorage when attempting to connect
		//const userId = localStorage.getItem("userId")
		//if id is 50 he's admin so he can acces the requested route
		//if (userId == 50)
			return <Route exact path={props.path} component={props.component} />;
	}
	return <Route render={() => <Redirect to="/login" />} />;
}

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/Calander" component={Calander} />
					<PrivateRoute path="/Get" component={Get} />
					<PrivateRoute path="/EditClass" component={EditClass} />
					<Route exact path="/Login" component={Login} />
					<Route exact path="/signup" component={signup} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
