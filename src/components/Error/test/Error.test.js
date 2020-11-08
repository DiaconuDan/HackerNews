import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../Error";

describe("Error component", () => {
  test("renders correctly", () => {
    const error = "404NotFound";

    render(<Error error={error} />);

    expect(
      screen.getByText("There was an error! Try reloading the page.")
    ).toBeInTheDocument();
    expect(screen.getByText(`Error details: ${error}`)).toBeInTheDocument();
  });
});
