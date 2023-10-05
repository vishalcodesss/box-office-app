import { useState } from 'react';
import { searchforshows, searchforpeoples } from './../API/tvmaze';
import Searchform from '../components/searchform';

const Home = () => {
  const [apidata, setapidata] = useState(null);
  const [apidataerror, setapidataerror] = useState(null);


  const onsearch = async ({q,searchoption}) => {
    try {
      setapidataerror(null);

      let result;
      if(searchoption === 'shows' ){
        result = await searchforshows(q);
        }else{
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
      <Searchform onsearch={onsearch}/>
      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
