export class MovieList {
    Search: any;
    totalResults: string;
    response: string;

    constructor(movieListResponse: any) {
        this.Search = movieListResponse.Search;
        this.totalResults = movieListResponse.totalResults;
        this.response = movieListResponse.response;
    }
}
