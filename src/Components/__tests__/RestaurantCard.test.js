import RestaurantCard from "../RestaurantCard";

import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("Should render RestaurantCard component with props data", () => {
	render(<RestaurantCard resData={MOCK_DATA} />);
	const name = screen.getByText("Pinki Chole Bhandar");
	expect(name).toBeInTheDocument();
});
