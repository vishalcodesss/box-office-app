import { Link } from 'react-router-dom';

const Showcard = ({ name, image, id, summary }) => {
  const summarystripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : // ? summary.replace(/<.+?>/g, '')
      'No description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>

      <p>{summarystripped}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star</button>
      </div>
    </div>
  );
};

export default Showcard;
