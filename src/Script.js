import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

// import Grocery from "./Components/Grocery";

//Chunking
//Dynamic bundling
//code splitting
//lazy loading
//on demand loading
//dynamic import
//this one line is doing bundling our code

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
	const [userName, setUserName] = useState();
	//Authentication
	useEffect(() => {
		//Make an Api call and show data
		const data = {
			name: "Shruti Garg",
		};
		setUserName(data.name);
	}, []);
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				<div className="app">
					<Header />
					<Outlet />
					<Footer />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading....</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading....</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
