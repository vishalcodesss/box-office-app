import { Link, useParams } from 'react-router-dom';
import { getShowbyId } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import Showmaindata from '../components/shows/Showmaindata';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';

const Show = () => {
  const { showId } = useParams();
  // const {showdata, showerror} = useShowById(showId)
  const { data: showdata, error: showerror } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowbyId(showId),
    refetchOnWindowFocus: false,
  });

  if (showerror) {
    return <TextCenter>We have an Error : {showerror.message} </TextCenter>;
  }
  if (showdata) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
        <Link to="/" type='button'>Go back to home</Link>
        </BackHomeWrapper>


        <Showmaindata
          image={showdata.image}
          name={showdata.name}
          rating={showdata.rating}
          summary={showdata.summary}
          genres={showdata.genres}
        />

        <InfoBlock>
          <h1>Details</h1>
          <Details
            type={showdata.type}
            language={showdata.language}
            status={showdata.status}
            premiered={showdata.premiered}
            network={showdata.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showdata._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
            <Cast  cast={showdata._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  };
  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;