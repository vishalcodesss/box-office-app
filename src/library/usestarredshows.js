import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialstate, localstoragekey) => {
  const [state, dispatch] = useReducer(reducer, initialstate, initial => {
    const persistedvalue = localStorage.getItem(localstoragekey);

    return persistedvalue ? JSON.parse(persistedvalue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localstoragekey, JSON.stringify(state));
  }, [state, localstoragekey]);

  return [state, dispatch];
};

const starredshowreducer = (currentstarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentstarred.concat(action.showId);
    case 'UNSTAR':
      return currentstarred.filter(showId => showId !== action.showId);
    default:
      return currentstarred;
  }
};
export const useStarredshows = () => {
  return usePersistedReducer(starredshowreducer, [], 'starredshows');
};
