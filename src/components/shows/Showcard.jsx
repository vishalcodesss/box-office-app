import styled from "styled-components";

const Showcard = ({ name, image, id, summary,onStarMeClick, isstarred }) => {
  const summarystripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>

      <p>{summarystripped}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>
        <button type="button" onClick={()=> onStarMeClick(id)}>
          {isstarred ? 'Unstar me' : 'Star me'}
        </button>
      </div>
    </div>
  );
};

export default Showcard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
