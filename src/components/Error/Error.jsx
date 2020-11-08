import React from "react";
import { ErrorWrapper, ErrorMessage } from "./styles";

const Error = ({ error }) => (
  <ErrorWrapper>
    <ErrorMessage> There was an error! Try reloading the page. </ErrorMessage>
    <ErrorMessage> Error details: {error} </ErrorMessage>
  </ErrorWrapper>
);

export default Error;