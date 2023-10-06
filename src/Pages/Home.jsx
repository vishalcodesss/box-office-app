import { useState } from 'react';
import { searchforshows, searchforpeoples } from './../API/tvmaze';
import Searchform from '../components/Searchform';
import Showsgrid from '../components/shows/Showsgrid';
import Actorsgrid from '../components/actors/Actorsgrid';

const Home = () => {
  const [apidata, setapidata] = useState(null);
  const [apidataerror, setapidataerror] = useState(null);

  const onsearch = async ({ q, searchoption }) => {
    try {
      setapidataerror(null);

      let result;
      if (searchoption === 'shows') {
        result = await searchforshows(q);
      } else {
        result = await searchforpeoples(q);
      }

      setapidata(result);
    } catch (error) {
      setapidataerror(error);
    }
  };

  const renderapidata = () => {
    if (apidataerror) {
      return <div>Error occured! {apidataerror.message}</div>;
    }

    if(apidata?.length === 0){
      return <div>No Results</div>
    }

    if (apidata) {
      return apidata[0].show ? <Showsgrid shows = {apidata}/> : <Actorsgrid actors ={apidata}/>;
    }
    return null;
  };

  return (
    <div>
      <Searchform onsearch={onsearch} />
      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;

// This code is a React component that represents the home page of a web application.

// The component uses the useState hook from React to manage the state of two variables: apidata and apidataerror.

// The apidata variable is used to store the data retrieved from an API, while the apidataerror variable is used to store any error that occurs during the API request.

// The onsearch function is an asynchronous function that is called when the user performs a search. It takes an object as a parameter containing the search query and the search option (shows or people).

// Inside the onsearch function, it first sets the apidataerror to null to clear any previous error. Then, it makes an API request based on the search option selected. If the search option is "shows", it calls the searchforshows function from the tvmaze API module, otherwise it calls the searchforpeoples function. The result of the API request is stored in the apidata variable.

// If there is an error during the API request, the apidataerror variable is set to the error object.

// The renderapidata function is used to render the API data on the page. If there is an error (apidataerror is not null), it displays an error message. If there is data (apidata is not null), it maps over the data and displays the name of each show or person.

// In the return statement of the component, it renders a Searchform component and the result of the renderapidata function.

// Overall, this code sets up the basic structure for a home page that allows users to search for shows or people and displays the search results
