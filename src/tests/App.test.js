import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Premier League", () => {
  render(<App />);
  const linkElement = screen.getByText(/premier league/i);
  expect(linkElement).toBeInTheDocument();
});
