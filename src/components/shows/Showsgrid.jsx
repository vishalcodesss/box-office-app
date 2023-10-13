import { useReducer, useEffect } from 'react';
import Showcard from './Showcard';

const usePersistedReducer = (reducer, initialstate, localstoragekey) =>{
  const [state, dispatch] = useReducer(reducer, initialstate, (initial)=>{
    const persistedvalue = localStorage.getItem(localstoragekey)

    return persistedvalue ? JSON.parse(persistedvalue) : initial;
  });

  useEffect(()=>{
    localStorage.setItem(localstoragekey,JSON.stringify(state))
  } , [state, localstoragekey])

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

const Showsgrid = ({ shows }) => {
  const [starredshows, dispatchstarred] = usePersistedReducer(starredshowreducer, [],'starredshows');

  const onStarMeClick = (showId) =>{
    const isstarred = starredshows.includes(showId);

    if(isstarred){
      dispatchstarred({type:'UNSTAR', showId})
    }else{
      dispatchstarred({type:'STAR', showId})
    }
  }  

  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/image-not-found.png'
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default Showsgrid;
