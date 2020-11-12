import React from "react";
import { render } from "@testing-library/react";
import Table from "../Table";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Table component", () => {
  const news = [
    {
      author: "Dan",
      title: "React-Redux book",
      num_comments: "100",
      objectID: "500",
    },
  ];

  test("should render correctly", () => {
    const { getByText } = render(<Table news={news} />);

    expect(getByText(news[0].author)).toBeInTheDocument();
    expect(getByText(news[0].title)).toBeInTheDocument();
    expect(getByText(news[0].num_comments)).toBeInTheDocument();
  });

  test("action buttons should be eye and delete by default", () => {
    const { getByTestId, queryByTestId } = render(<Table news={news} />);

    expect(queryByTestId("loadingIcon")).toBeNull();
    expect(getByTestId("eyeIcon")).toBeInTheDocument();
    expect(getByTestId("deleteIcon")).toBeInTheDocument();
  });


});
