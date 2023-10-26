import { FlexGrid } from '../common/FlexGrid';
import Actorscard from './Actorscard';
import NotFoundImgSrc from '../../library/image-not-found.png'

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
            data.person.image ? data.person.image.medium : NotFoundImgSrc
          }
        />
      ))}
    </FlexGrid>
  );
};

export default Actorsgrid;
