import React from "react";
import { render, screen } from "@testing-library/react";
import MatchInfo from "../components/MatchInfo";

describe("Match Info", () => {
  const validProps = {
    home: "Arsenal",
    away: "Fulham",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<MatchInfo teams={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Arsenal", () => {
    render(<MatchInfo teams={validProps} />);
    const arsenal = screen.getByText(/arsenal/i);

    expect(arsenal).toBeInTheDocument();
  });

  it("renders Fulham", () => {
    render(<MatchInfo teams={validProps} />);
    const fulham = screen.getByText(/fulham/i);

    expect(fulham).toBeInTheDocument();
  });
});
