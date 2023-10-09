const Baseurl ='https://api.tvmaze.com';

const apiget = async (queryString) =>{
    const response = await fetch(`${Baseurl}${queryString}`);

        const body = await response.json();
        return body;
    };
    //https://api.tvmaze.com/search/shows?q=${searchStr}

export const searchforshows = (query) =>{
    return apiget(`/search/shows?q=${query}`)
}
export const searchforpeoples = (query) =>{
    return apiget(`/search/people?q=${query}`)
}
export const getShowbyId = showId => {
    return apiget(`/shows/${showId}`);
  };
  
