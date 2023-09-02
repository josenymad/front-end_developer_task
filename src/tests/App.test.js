import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("Premier League", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error message when no data is fetched", () => {
    render(<App />);
    const errorMessage = screen.getByText(
      "Sorry, there may be a problem with our servers if the stats have not loaded after a while. Please try again later.",
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
