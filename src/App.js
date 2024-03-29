import './App.css';
import Intro from "./pages/intro.page";
import User from "./pages/user.page";

import {
	Route, Switch, useLocation
} from "react-router-dom";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function App() {
	let query = useQuery();

	return (
		<div className="App">
			<Switch>
				<Route path="/user/:user">
					<User />
				</Route>
				<Route path="/user/">
					<Intro errorMessage={query.get("error")} />
				</Route>
				<Route path="/">
					<Intro errorMessage={query.get("error")} />
				</Route>
			</Switch>
		</div>
	);
}
