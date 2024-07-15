import React from "react"
import styled from "styled-components"
import Input from "components/input"
import Select from "components/select"

interface IProps {
    query: string;
    onChangeQuery: (query: string) => void;
    rating: number;
    onChangeRating: (rating:number) => void;
}

const Root = styled.div`
    text-align:center;
`


const Header = ({query, onChangeQuery, rating, onChangeRating}:IProps) => {
  return (
    <Root>
      <h1>My Movie App</h1>
      <Input 
        value={query} 
        onChange={onChangeQuery} 
        placeholder="search a movie"
      />
      <Select value={rating} 
        onChange={onChangeRating} 
        options={[...Array(10).keys()].map(value=> ({id: value, value}))}
        renderOption={(option) => (
            <option key={option.id} value={option.value}>
              {option.value}⭐️
            </option>
          )}
        />
    </Root>
  )
}


export default Header;
