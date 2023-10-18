import { useState } from 'react';
import { useSearchStr } from '../library/useSearchStr';
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
      <input type="text" value={searchStr} onChange={onSearchInputchange} />

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

      <button type="submit">Search</button>
    </form>
  );
};

export default Searchform;
