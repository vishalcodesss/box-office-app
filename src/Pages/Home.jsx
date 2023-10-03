import { useState } from "react";
import { searchforshows } from "./../API/tvmaze"

const Home =() =>{
    const[searchStr, setSearchStr] = useState("");
    const[apidata,setapidata] = useState(null);
    const [apidataerror, setapidataerror] = useState(null);

    const onSearchInputchange = (ev) =>{
        setSearchStr(ev.target.value);
    };
    const onsearch = async (ev)=>{
        ev.preventDefault();

        try{
            setapidataerror(null);
    const result=await searchforshows(searchStr);
        setapidata(result);
        }catch(error){
            setapidataerror(error);
        }
    };

    const renderapidata = () =>{

        if(apidataerror){
            return <div>Error occured! {apidataerror.message}</div>
        }

        if(apidata){
            return apidata.map((data)=>(
                <div key={data.show.id}>{data.show.name}</div>
            ))
        }
        return null;
    } ;

    return (
    <div>
        <form onSubmit={onsearch}>
        <input type="text" value={searchStr} onChange={onSearchInputchange}/>
        <button type="submit" >Search</button>
        </form>
        <div>{renderapidata()}</div>
    </div>
);
};


export default Home;