import { useStarredshows } from "../library/usestarredshows";

const Starred = () => {
  const [starredshows] = useStarredshows();

  return <div>No of Starred shows are {starredshows.length}</div>;
};

export default Starred;
