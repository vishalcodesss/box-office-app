import { useState } from 'react';
import { searchforshows, searchforpeoples } from './../API/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apidata, setapidata] = useState(null);
  const [apidataerror, setapidataerror] = useState(null);
  const [searchoption, setsearchoption] = useState("shows")


  const onSearchInputchange = ev => {
    setSearchStr(ev.target.value);
  };
  const onradiochange = ev =>{
    setsearchoption(ev.target.value)
  };
  const onsearch = async ev => {
    ev.preventDefault();

    try {
      setapidataerror(null);

      if(searchoption === 'shows' ){
        const result = await searchforshows(searchStr);
        setapidata(result);
        }else{
        const result = await searchforpeoples(searchStr);
        setapidata(result);
        }
    } catch (error) {
      setapidataerror(error);
    }
  };

  const renderapidata = () => {
    if (apidataerror) {
      return <div>Error occured! {apidataerror.message}</div>;
    }

    if (apidata) {
      return apidata[0].show ? apidata.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      )) : apidata.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onsearch}>
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
      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
