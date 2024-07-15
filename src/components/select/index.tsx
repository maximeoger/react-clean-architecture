import React, { ReactNode } from "react";
import styled from "styled-components"

type OptionValue = string | number;
type Option<T extends OptionValue> = { id: number; value: T };

interface IProps<T extends OptionValue> {
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  renderOption: (option: Option<T>) => ReactNode;
}


const InputSelect = styled.select`
  margin-left: 20px;
  height: 30px;
  border: 1px solid dimgray;
  border-radius: 8px;
  width: 50px;
  &:focus {
    outline: none !important;
    border-color: limegreen;
  }
`;


export default function Select<T extends OptionValue>({ value, onChange, options, renderOption }: IProps<T>) {

  return (
    <InputSelect value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map(option=> renderOption(option))}
    </InputSelect>
  )
}