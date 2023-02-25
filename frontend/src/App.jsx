import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Login, Netflix, Signup } from "./pages/index";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path={ROUTES.LOGIN}
					element={<Login />}
				/>
				<Route
					exact
					path={ROUTES.SIGN_UP}
					element={<Signup />}
				/>
				<Route
					exact
					path={ROUTES.NETFLIX}
					element={<Netflix />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
