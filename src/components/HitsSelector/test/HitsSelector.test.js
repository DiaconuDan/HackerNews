import React from "react";
import { render, screen } from "@testing-library/react";
import HitsSelector from "../HitsSelector";

describe("HitsSelector component", () => {
  test("renders correctly", () => {
    const hitsPerPage = 50;
    const onChange = jest.fn();

    render(<HitsSelector hitsPerPage={hitsPerPage} onChange={onChange} />);

    expect(screen.getByText("hitsPerPage")).toBeInTheDocument();
    expect(screen.getByDisplayValue(`${hitsPerPage}`)).toBeInTheDocument();
  });
});
