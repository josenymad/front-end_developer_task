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
      "If the stats haven't loaded after a while there may be a problem with the server. Sorry, please try again later.",
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
