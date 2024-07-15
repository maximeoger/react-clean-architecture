import React from "react"
import styled from "styled-components";

interface IProps<T extends string | number> {
  onChange: (value: T) => void;
  value: T;
  placeholder: string;
}

const Field = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  &:focus {
    outline: none !important;
    border-color: limegreen;
  }
`;


export default function Input<T extends string | number>({value, onChange, placeholder}: IProps<T>) {
  return (
    <Field value={value} placeholder={placeholder} onChange={(e)=> onChange(e.target.value as T)}/>
  )
}

