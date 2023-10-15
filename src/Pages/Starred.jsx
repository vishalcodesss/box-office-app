import { getShowbyIds } from '../API/tvmaze';
import Showsgrid from '../components/shows/Showsgrid';
import { useStarredshows } from '../library/usestarredshows';
import { useQuery } from '@tanstack/react-query';

const Starred = () => {
  const [starredshowsIds] = useStarredshows();

  const { data: starredshows, error: starredshowserror } = useQuery({
    queryKey: ['starred', starredshowsIds],
    queryFn: () =>
      getShowbyIds(starredshowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredshows?.length === 0) {
    return <div>No shows were starred </div>
  }
  if(starredshows?.length>0){
    return <Showsgrid shows={starredshows} />;
  }
  if(starredshowserror){
    return <div>Error occured : {starredshowserror.message}</div>
  }

  return <div>Shows are loading</div>;
};

export default Starred;
