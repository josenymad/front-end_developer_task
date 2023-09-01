import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("Premier League", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Premier League", () => {
    render(<App />);
    const premierLeague = screen.getByText(/premier league/i);

    expect(premierLeague).toBeInTheDocument();
  });

  it("renders Arsenal", () => {
    render(<App />);
    const arsenal = screen.getByText(/arsenal/i);

    expect(arsenal).toBeInTheDocument();
  });

  it("renders Fulham", () => {
    render(<App />);
    const fulham = screen.getByText(/fulham/i);

    expect(fulham).toBeInTheDocument();
  });
});
