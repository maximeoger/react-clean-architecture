import React from "react";
import styled from "styled-components";

interface IProps {
  error?: string;
  color?: `#${string}`;
}

const Root = styled.div`
  height: 100%;
  text-align: center;
  font-weight: bold;
  text-align: center;
  margin-top: 32px;
  color: ${({ color }) => color};
`;

export default function Error({
  error = "An error occured",
  color = "#FF0000",
}: IProps) {
  return <Root color={color}>{error}</Root>;
}
