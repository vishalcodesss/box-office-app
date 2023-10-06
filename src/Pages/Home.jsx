import { useState } from 'react';
import { searchforshows, searchforpeoples } from './../API/tvmaze';
import Searchform from '../components/Searchform';
import Showsgrid from '../components/shows/Showsgrid';
import Actorsgrid from '../components/actors/Actorsgrid';

const Home = () => {
  const [apidata, setapidata] = useState(null);
  const [apidataerror, setapidataerror] = useState(null);

  const onsearch = async ({ q, searchoption }) => {
    try {
      setapidataerror(null);

      let result;
      if (searchoption === 'shows') {
        result = await searchforshows(q);
      } else {
        result = await searchforpeoples(q);
      }

      setapidata(result);
    } catch (error) {
      setapidataerror(error);
    }
  };

  const renderapidata = () => {
    if (apidataerror) {
      return <div>Error occured! {apidataerror.message}</div>;
    }

    if(apidata?.length === 0){
      return <div>No Results</div>
    }

    if (apidata) {
      return apidata[0].show ? <Showsgrid shows = {apidata}/> : <Actorsgrid actors ={apidata}/>;
    }
    return null;
  };

  return (
    <div>
      <Searchform onsearch={onsearch} />
      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
