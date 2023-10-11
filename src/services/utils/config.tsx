import {
    API_BASE_URL,
    API_KEY,
    API_SEARCH_PARAM,
    API_TITLE_PARAM,
    API_ID_PARAM,
    API_PAGE_PARAM,
    API_KEY_PARAM,
    API_AND
} from "@env";

export const GenerateURLBySearch = (search: string, pageNumber: number) => {
    return `${API_BASE_URL}${API_SEARCH_PARAM}${search}${API_AND}${API_KEY_PARAM}${API_KEY}${API_AND}${API_PAGE_PARAM}${pageNumber}`
}