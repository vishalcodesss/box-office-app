import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchforshows, searchforpeoples } from './../API/tvmaze';
import Searchform from '../components/Searchform';
import Showsgrid from '../components/shows/Showsgrid';
import Actorsgrid from '../components/actors/Actorsgrid';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apidata, error: apidataerror } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchoption === 'shows'
        ? searchforshows(filter.q)
        : searchforpeoples(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus:false,
  });

  const onsearch = async ({ q, searchoption }) => {
    setFilter({ q, searchoption });
  };

  const renderapidata = () => {
    if (apidataerror) {
      return <div>Error occured! {apidataerror.message}</div>;
    }

    if (apidata?.length === 0) {
      return <div>No Results</div>;
    }

    if (apidata) {
      return apidata[0].show ? (
        <Showsgrid shows={apidata} />
      ) : (
        <Actorsgrid actors={apidata} />
      );
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
