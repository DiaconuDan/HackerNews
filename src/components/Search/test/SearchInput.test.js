import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput component", () => {
  test("renders correctly", () => {
    const value = "Stephen";
    const onChange = jest.fn();

    render(<SearchInput value={value} onChange={onChange} />);

    const input = screen.getByPlaceholderText("Search for hackernews");
    const inputValue = screen.getByDisplayValue(`${value}`);

    expect(input).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();

    const newValue = "ChangedValue";

    fireEvent.change(input, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalled();
  });
});
