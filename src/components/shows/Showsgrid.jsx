import { useStarredshows } from '../../library/usestarredshows';
import Showcard from './Showcard';
import {FlexGrid} from '../common/FlexGrid'


const Showsgrid = ({ shows }) => {

 const [starredshows, dispatchstarred]= useStarredshows();

  const onStarMeClick = (showId) =>{
    const isstarred = starredshows.includes(showId);

    if(isstarred){
      dispatchstarred({type:'UNSTAR', showId})
    }else{
      dispatchstarred({type:'STAR', showId})
    }
  }  

  return (
    <FlexGrid>
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
          isstarred = {starredshows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default Showsgrid;
