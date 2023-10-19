import { FlexGrid } from '../common/FlexGrid';
import Actorscard from './Actorscard';

const Actorsgrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <Actorscard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathdayday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image ? data.person.image.medium : 'image-not-found.png'
          }
        />
      ))}
    </FlexGrid>
  );
};

export default Actorsgrid;
