import { getShowbyIds } from '../API/tvmaze';
import Showsgrid from '../components/shows/Showsgrid';
import { useStarredshows } from '../library/usestarredshows';
import { useQuery } from '@tanstack/react-query';
import { TextCenter} from '../components/common/TextCenter'

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
    return <TextCenter>No shows were starred </TextCenter>
  }
  if(starredshows?.length>0){
    return <Showsgrid shows={starredshows} />;
  }
  if(starredshowserror){
    return <TextCenter>Error occured : {starredshowserror.message}</TextCenter>
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
