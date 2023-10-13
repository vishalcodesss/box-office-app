import { useState, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchforshows, searchforpeoples } from './../API/tvmaze';
import Searchform from '../components/Searchform';
import Showsgrid from '../components/shows/Showsgrid';
import Actorsgrid from '../components/actors/Actorsgrid';

const reducerfn = (currentcounter, action) => {
  switch(action.type){
    case 'INCREMENT':
      return currentcounter + 1;
    case 'DECREMENT':
      return currentcounter - 1;
    case 'RESET':
      return 0;
    case 'INCREMENTBYTEN':
      return currentcounter + 10; 
    case 'set to 500':
      return action.newcountervalue;

  }
  return 0;
}

const Home = () => {
  const [filter, setFilter] = useState(null);

  const[counter, dispatch] = useReducer(reducerfn, 0)
  const onIncrement = () => {
    dispatch({ type: 'INCREMENT'})
  }
  const onDecrement = () => {
    dispatch({ type: 'DECREMENT'})
  }
  const onReset = () => {
    dispatch({ type: 'RESET'})
  }
  const incrementbyten = () => {
    dispatch({type: 'INCREMENTBYTEN'})
  }
  const setto500 = () =>{
    dispatch({type: 'set to 500', newcountervalue:500})
  } 

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

      <div>Counter: {counter}</div>
      <button type='button' onClick={onIncrement}>Increment</button>
      <button type='button' onClick={onDecrement}>Decrement</button>
      <button type='button' onClick={onReset}>Reset</button>
      <button type='button' onClick={incrementbyten}>Increment by 10</button>
      <button type='button' onClick={setto500}>Set to 500</button>

      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
