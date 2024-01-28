import Contact from "../Contact";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
	it("Should load contact us component", () => {
		render(<Contact />);

		const heading = screen.getByRole("heading");
		//Assertion
		expect(heading).toBeInTheDocument();
	});
	it("Should load contact us page button", () => {
		render(<Contact />);
		// const button = screen.getByRole("button");
		const button = screen.getByText("Submit");

		expect(button).toBeInTheDocument();
	});

	it("Should load contact us page input", () => {
		render(<Contact />);
		// const button = screen.getByRole("button");
		const inp = screen.getByPlaceholderText("name");

		expect(inp).toBeInTheDocument();
	});

	it("Should load two input boxes on contact page", () => {
		render(<Contact />);
		//Querying
		const allInputs = screen.getAllByRole("textbox");
		// console.log(allInputs.length);

		//Assertion
		expect(allInputs.length).toBe(2);
		// expect(allInputs.length).not.toBe(3);
	});
});

// test === it
