import {
    API_BASE_URL,
    API_KEY,
    API_SEARCH_PARAM,
    API_TITLE_PARAM,
    API_ID_PARAM,
    API_PAGE_PARAM,
    API_KEY_PARAM,
    API_YEAR_PARAM,
    API_TYPE_PARAM,
    URL_SCHEME,
    API_FULL_PLOT_PARAM
} from "@env";

export const GenerateURLBySearch = (search: string, pageNumber: number) => {
    return `${URL_SCHEME}${API_BASE_URL}${API_SEARCH_PARAM}${search}${API_KEY_PARAM}${API_KEY}${API_PAGE_PARAM}${pageNumber}`
}

export const GenerateURLBySearchAdvanced = (search: string, year: string, type: string, pageNumber:number) => {
    let params: string = "";
    const searchParam = API_SEARCH_PARAM + search;

    if (year.length > 0)
        params += API_YEAR_PARAM + year;
    
    if (type.length > 0 && type !== "all")
        params += API_TYPE_PARAM + type;
        console.log(`${URL_SCHEME}${API_BASE_URL}${searchParam}${params}${API_KEY_PARAM}${API_KEY}${API_PAGE_PARAM}${pageNumber}`)
    return `${URL_SCHEME}${API_BASE_URL}${searchParam}${params}${API_KEY_PARAM}${API_KEY}${API_PAGE_PARAM}${pageNumber}`;
}

export const GenerateURLByID = (id: string) => {
    return `${URL_SCHEME}${API_BASE_URL}${API_ID_PARAM}${id}${API_FULL_PLOT_PARAM}${API_KEY_PARAM}${API_KEY}`;
}

export const convertMovieIdToApiUrl = (moviesId:string[]) => {
    return moviesId.map((movieId) => GenerateURLByID(movieId));
}