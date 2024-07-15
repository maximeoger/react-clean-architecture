import React, { Children, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { Spinner } from "./spinner";
import Error from "./error";

interface IProps {
  error?: string;
  loading?: boolean;
  color?: `#${string}`;
  noData?: boolean;
  children: ReactElement;
}

const Root = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function DataContainer({
  loading,
  error,
  noData,
  children,
}: IProps) {
  return (
    <Root>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : noData ? (
        <Error error="No data" color="#000" />
      ) : (
        children)}
    </Root>
  );
}
