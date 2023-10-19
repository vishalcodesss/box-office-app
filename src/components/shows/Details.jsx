import styled from "styled-components";

const Details = props => {
    const {language,type, status, premiered, network} = props;
    
  return <div>
    <p>Language: {language}</p>
    <p>Type of show: {type}</p>
    <p>Status: {status}</p>
    <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
    </p>

  </div>;
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
