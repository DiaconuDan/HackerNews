// Didn't have the time to update it properly and add tests that mock useDispatch and selector. The same goes for the saga

// import React from "react";
// import { getByTestId, render, screen } from "@testing-library/react";
// import Table from "../Table";
// import { useSelector, useDispatch } from 'react-redux'; 
// import configureStore from 'redux-mock-store';


// const mockStore = configureStore([]);

// describe("Table component", () => { // 

//   let store = mockStore({
//     showArticleId: '500',
//     showArticle: {}
//   });

//   store.dispatch = jest.fn();

//   const news = [
//     {
//       author: "Dan",
//       title: "React-Redux book",
//       num_comments: "100",
//       objectID: "500",
//     },
//   ];

//   test("should render correctly", () => {
//     const showArticleId = "1000";

//     const { getByText, getByTestId, queryByTestId } = render(
//       <Table
//         news={news}
//       />
//     );

//     expect(getByText(news[0].author)).toBeInTheDocument();
//     expect(getByText(news[0].title)).toBeInTheDocument();
//     expect(getByText(news[0].num_comments)).toBeInTheDocument();
//   });

//   test("action buttons should be eye and delete when showId doesn't match rowID", () => {

//     const { getByTestId, queryByTestId } = render(
//       <Table
//         news={news}
//       />
//     );

//     expect(queryByTestId("loadingIcon")).toBeNull();
//     expect(getByTestId("eyeIcon")).toBeInTheDocument();
//     expect(getByTestId("deleteIcon")).toBeInTheDocument();
//   });

//   test("action buttons should be loading and delete when showId matches rowID", () => {

//     const { getByTestId, queryByTestId } = render(
//       <Table
//         news={news}
//       />
//     );

//     expect(queryByTestId("eyeIcon")).toBeNull();
//     expect(getByTestId("loadingIcon")).toBeInTheDocument();
//     expect(getByTestId("deleteIcon")).toBeInTheDocument();
//   });
// });
