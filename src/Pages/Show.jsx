import { useParams } from 'react-router-dom';
import { getShowbyId } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import Showmaindata from '../components/shows/Showmaindata';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const Show = () => {
  const { showId } = useParams();
  // const {showdata, showerror} = useShowById(showId)
  const { data: showdata, error: showerror } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowbyId(showId),
    refetchOnWindowFocus: false,
  });

  if (showerror) {
    return <div>We have an Error : {showerror.message} </div>;
  }
  if (showdata) {
    return (
      <div>
        <Showmaindata
          image={showdata.image}
          name={showdata.name}
          rating={showdata.rating}
          summary={showdata.summary}
          genres={showdata.genres}
        />

        <div>
          <h1>Details</h1>
          <Details
            type={showdata.type}
            language={showdata.language}
            status={showdata.status}
            premiered={showdata.premiered}
            network={showdata.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showdata._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <div>
            <Cast cast={showdata._embedded.cast} />
          </div>
        </div>
      </div>
    );
  }
  return <div>Data is loading</div>;
};

export default Show;
