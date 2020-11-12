import React from "react";
import { render, screen } from "@testing-library/react";
import ShowRowModal from "../ShowRowModal";

describe("ShowRowModal component", () => {
  const handleClose = jest.fn();
  const activeArticle = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    comments: 500,
  };

  test("should render correctly when closed", () => {
    const open = false;

    const { container } = render(
      <ShowRowModal
        handleClose={handleClose}
        activeArticle={activeArticle}
        open={open}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  test("should render correctly when open", () => {
    const open = true;

    render(
      <ShowRowModal
        handleClose={handleClose}
        activeArticle={activeArticle}
        open={open}
      />
    );

    expect(
      screen.getByText(
        `Full details of "${activeArticle.title}" by ${activeArticle.author}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${JSON.stringify(activeArticle)}`)
    ).toBeInTheDocument();
  });
});
