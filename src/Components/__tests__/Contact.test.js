import Contact from "../Contact";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

test("Should load contact us component", () => {
	render(<Contact />);

	const heading = screen.getByRole("heading");
	//Assertion
	expect(heading).toBeInTheDocument();
});
test("Should load contact us page button", () => {
	render(<Contact />);
	// const button = screen.getByRole("button");
	const button = screen.getByText("Submit");

	expect(button).toBeInTheDocument();
});

test("Should load contact us page input", () => {
	render(<Contact />);
	// const button = screen.getByRole("button");
	const inp = screen.getByPlaceholderText("name");

	expect(inp).toBeInTheDocument();
});

test("Should load two input boxes on contact page", () => {
	render(<Contact />);
	//Querying
	const allInputs = screen.getAllByRole("textbox");
	// console.log(allInputs.length);

	//Assertion
	expect(allInputs.length).toBe(2);
	// expect(allInputs.length).not.toBe(3);
});
