import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import appStore from "../../Utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_MENU_DATA);
		},
	});
});

it("Should load Restaurant Menu component", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
					<RestaurantMenu />
					<Cart />
				</Provider>
			</BrowserRouter>
		)
	);

	const accordionHeader = screen.getByText("Snacks (20)");
	fireEvent.click(accordionHeader);
	const foodItems = screen.getAllByTestId("foodItems");
	expect(foodItems.length).toBe(20);

	const addBtns = screen.getAllByRole("button", { name: "Add +" });

	fireEvent.click(addBtns[0]);
	const addOneItem = screen.getByText("Cart - (1 items)");
	expect(addOneItem).toBeInTheDocument();
	fireEvent.click(addBtns[1]);
	const addSecondItem = screen.getByText("Cart - (2 items)");
	expect(addSecondItem).toBeInTheDocument();

	const foodItemsCart = screen.getAllByTestId("foodItems");
	expect(foodItemsCart.length).toBe(22);

	const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
	fireEvent.click(clearCartBtn);
	const foodItemsClearCart = screen.getAllByTestId("foodItems");
	expect(foodItemsClearCart.length).toBe(20);
	expect(
		screen.getByText("Cart is empty Add Items to the Cart")
	).toBeInTheDocument();
});
