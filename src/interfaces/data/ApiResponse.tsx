import MovieData from "./MovieData";
import MovieDetailData from "./MovieDetailData";

export default interface ApiResponse {
    Search: MovieData[] | MovieDetailData;
    totalResults: string;
    Response: string;
    Error?: string
}