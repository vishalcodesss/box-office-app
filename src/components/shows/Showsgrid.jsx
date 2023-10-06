import Showcard from './Showcard';

const Showsgrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/image-not-found.png'
        }
        summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default Showsgrid;
