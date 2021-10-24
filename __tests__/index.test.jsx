import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the main heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: /submit/im,
    });
  });
});
