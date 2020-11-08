import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table component", () => {
  const news = [
    {
      author: "Dan",
      title: "React-Redux book",
      num_comments: "100",
      objectID: "500",
    },
  ];

  const setShowArticleId = jest.fn();
  const setDeleteArticleId = jest.fn();

  test("should render correctly", () => {
    const showArticleId = "1000";

    const { getByText, getByTestId, queryByTestId } = render(
      <Table
        news={news}
        setShowArticleId={setShowArticleId}
        setDeleteArticleId={setDeleteArticleId}
        showArticleId={showArticleId}
      />
    );

    expect(getByText(news[0].author)).toBeInTheDocument();
    expect(getByText(news[0].title)).toBeInTheDocument();
    expect(getByText(news[0].num_comments)).toBeInTheDocument();
  });

  test("action buttons should be eye and delete when showId doesn't match rowID", () => {
    const showArticleId = "9999999999999999999";

    const { getByTestId, queryByTestId } = render(
      <Table
        news={news}
        setShowArticleId={setShowArticleId}
        setDeleteArticleId={setDeleteArticleId}
        showArticleId={showArticleId}
      />
    );

    expect(queryByTestId("loadingIcon")).toBeNull();
    expect(getByTestId("eyeIcon")).toBeInTheDocument();
    expect(getByTestId("deleteIcon")).toBeInTheDocument();
  });

  test("action buttons should be loading and delete when showId matches rowID", () => {
    const showArticleId = news[0].objectID;

    const { getByTestId, queryByTestId } = render(
      <Table
        news={news}
        setShowArticleId={setShowArticleId}
        setDeleteArticleId={setDeleteArticleId}
        showArticleId={showArticleId}
      />
    );

    expect(queryByTestId("eyeIcon")).toBeNull();
    expect(getByTestId("loadingIcon")).toBeInTheDocument();
    expect(getByTestId("deleteIcon")).toBeInTheDocument();
  });
});
