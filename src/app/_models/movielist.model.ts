export class MovieList {
    Search: [];
    totalResults: string;
    response: string;

    constructor(movieListResponse) {
        this.Search = movieListResponse.Search;
        this.totalResults = movieListResponse.totalResults;
        this.response = movieListResponse.response;
    }
}
