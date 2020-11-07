import React from "react";
import { ErrorWrapper, ErrorMessage } from "./styles";

const Error = () => (
  <ErrorWrapper>
    <ErrorMessage> API has failed! Try again </ErrorMessage>
  </ErrorWrapper>
);

export default Error;