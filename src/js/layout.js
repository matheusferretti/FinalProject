import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Profile } from "./views/profile";
import { Signup } from "./views/signup";
import { Signup2 } from "./views/signup2";
import { Search } from "./views/search";
import { Mock } from "./views/mock";
import { Mock2 } from "./views/mock2";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/signup2" component={Signup2} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/single/:theid" component={Single} />
						<Route exact path="/search" component={Search} />
						<Route exact path="/mock" component={Mock} />
						<Route exact path="/mock2" component={Mock2} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
