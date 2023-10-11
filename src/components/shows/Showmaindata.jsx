const Showmaindata = ({image, name, rating, summary, genres}) => {
  return (
    <div>
      <img src={image ? image.original : '/image-not-found.png'} alt={name} />

      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>

        <div dangerouslySetInnerHTML={{__html: summary}}/>
        <div>
            Genre : 
            <div>
                {genres.map((genre) =>(
                    <span key={genre}>{genre}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Showmaindata;
