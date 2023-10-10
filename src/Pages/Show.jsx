import { useParams } from "react-router-dom";
import { getShowbyId } from "../API/tvmaze";
import {useQuery} from '@tanstack/react-query'

const Show = () => {
    const { showId } = useParams();
    // const {showdata, showerror} = useShowById(showId)
    const {data:showdata, error:showerror} = useQuery({
      queryKey: ['show',showId],
      queryFn: () =>getShowbyId(showId)
    })

    if(showerror){
      return <div>We have an Error : {showerror.message} </div>
    }
    if(showdata){
      return <div>Got Show data : {showdata.name}</div>
    }
    return <div>Data is loading</div>;
  };
  
  export default Show;
  