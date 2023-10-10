import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowbyId } from "../API/tvmaze";

const useShowById = (showId) =>{
  const [showdata , setshowdata] = useState(null);
  const [showerror, setshowerror] = useState(null);

  useEffect(()=>{
    async function fetchdata(){
      try {
        const data = await getShowbyId(showId);
        setshowdata(data);
      } catch (err) {
        setshowerror(err)
      }
    }
    fetchdata();
  }, [showId])
  return {showdata, showerror}
};

const Show = () => {
    const { showId } = useParams();
    const {showdata, showerror} = useShowById(showId)

    if(showerror){
      return <div>We have an Error : {showerror.message} </div>
    }
    if(showdata){
      return <div>Got Show data : {showdata.name}</div>
    }
    return <div>Data is loading</div>;
  };
  
  export default Show;
  