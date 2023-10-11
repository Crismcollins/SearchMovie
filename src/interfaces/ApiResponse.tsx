import MovieData from "./MovieData";

export default interface ApiResponse {
    Search: MovieData[];
    totalResults: string;
    Response: string;
    Error?: string
}