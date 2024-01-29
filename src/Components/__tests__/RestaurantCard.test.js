import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_NEWLY_BOARD_DATA from "../mocks/resCardNewBoard.json";

import "@testing-library/jest-dom";
import { withNewlyBoardedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props data", () => {
	render(<RestaurantCard resData={MOCK_DATA} />);
	const name = screen.getByText("Pinki Chole Bhandar");
	expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Newly Boarded Label", () => {
	//Test Higher order component : withNewlyBoardedLabel
	const RestaurantCardNewlyBoarded = withNewlyBoardedLabel(RestaurantCard);

	render(<RestaurantCardNewlyBoarded resData={MOCK_NEWLY_BOARD_DATA} />);
	const label = screen.getByText("Newly Boarded");
	expect(label).toBeInTheDocument();
});
