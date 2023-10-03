const Baseurl ='https://api.tvmaze.com/';

const apiget = async (queryString) =>{
    const response = await fetch(`${Baseurl}${queryString}`);

        const body = await response.json();
        //https://api.tvmaze.com/search/shows?q=${searchStr}
        return body;
};

export const searchforshows = (query) =>{
    return apiget(`/search/shows?q=${query}`)
}
