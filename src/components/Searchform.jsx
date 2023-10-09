import { useState, useEffect } from "react";

const Searchform = ({onsearch}) =>{
    const [searchStr, setSearchStr] = useState('');
    const [searchoption, setsearchoption] = useState("shows")

 
    const onSearchInputchange = ev => {
        setSearchStr(ev.target.value);
      };
      const onradiochange = ev =>{
        setsearchoption(ev.target.value)
      };
      const onSubmit = (ev) =>{
        ev.preventDefault();

        const options = {
            q: searchStr,
            searchoption
        }
        onsearch(options);
      }

    return(
    <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputchange} />

        <label>
            <input type="radio" name='search-option' value='shows' checked={searchoption === 'shows'}
             onChange={onradiochange}/>
            Shows
        </label>

        <label>
            <input type="radio" name='search-option' value='actors' checked={searchoption === 'actors'}
             onChange={onradiochange}/>
            Actors
        </label>

        <button type="submit">Search</button>
      </form>
    ) 
};

export default Searchform;