import React from "react";
import { render, screen } from "@testing-library/react";
import MatchInfo from "../components/MatchInfo";
import mockData from "./mockData.json";

describe("Match Info", () => {
  const { match: matchData } = mockData;

  it("renders correctly", () => {
    const { asFragment } = render(<MatchInfo matchData={matchData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders home team name", () => {
    render(<MatchInfo matchData={matchData} />);
    const arsenal = screen.getByText("Arsenal");

    expect(arsenal).toBeInTheDocument();
  });

  it("renders away team name", () => {
    render(<MatchInfo matchData={matchData} />);
    const fulham = screen.getByText("Fulham");

    expect(fulham).toBeInTheDocument();
  });

  it("renders home team badge", () => {
    render(<MatchInfo matchData={matchData} />);
    const homeTeamBadge = screen.getByAltText("Home Team Badge");

    expect(homeTeamBadge).toBeInTheDocument();
  });

  it("renders away team badge", () => {
    render(<MatchInfo matchData={matchData} />);
    const awayTeamBadge = screen.getByAltText("Away Team Badge");

    expect(awayTeamBadge).toBeInTheDocument();
  });
});
