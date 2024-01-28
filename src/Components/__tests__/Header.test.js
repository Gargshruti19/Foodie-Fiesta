import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// import "../../../assets/logo.png";
it("Should load Header Component with a login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// const loginButton = screen.getByRole("button");
	// const loginButton = screen.getByText("Log In");
	const loginButton = screen.getByRole("button", { name: "Log In" });

	expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with a Cart having 0 items", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText("Cart - (0 items)");

	expect(cartItems).toBeInTheDocument();
});

it("Should load Header Component with a Cart item", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText(/Cart/);

	expect(cartItems).toBeInTheDocument();
});

it("Should change log In button to log out on click", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
	const loginButton = screen.getByRole("button", { name: "Log In" });
	fireEvent.click(loginButton);
	const logoutButton = screen.getByRole("button", { name: "Log Out" });
	expect(logoutButton).toBeInTheDocument();
});
