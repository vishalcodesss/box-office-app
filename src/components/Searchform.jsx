import { useState } from 'react';
import { useSearchStr } from '../library/useSearchStr';
import styled from 'styled-components';
import Customradio from './Customradio';

const Searchform = ({ onsearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchoption, setsearchoption] = useState('shows');

  const onSearchInputchange = ev => {
    setSearchStr(ev.target.value);
  };
  const onradiochange = ev => {
    setsearchoption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchoption,
    };
    onsearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchStr}
        onChange={onSearchInputchange}
      />

      <RadiosWrapper>
        <Customradio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchoption === 'shows'}
          onChange={onradiochange}
        />

        <Customradio
          label="Actors"
          name="search-option"
          value="actors"
          checked={searchoption === 'actors'}
          onChange={onradiochange}
        />
      </RadiosWrapper>

      <SearchButtonWrapper>
      <button type="submit">Search</button>
      </SearchButtonWrapper>

    </form>
  );
};

export default Searchform;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
