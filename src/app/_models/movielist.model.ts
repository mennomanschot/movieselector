import { Movie } from './movie.model';

export class MovieList {
    Search: any;
    totalResults: string;
    response: string;

    constructor(movieListResponse: any) {
        this.Search = movieListResponse.Search; // extract search result values from APIresponse
        this.totalResults = movieListResponse.totalResults; // extract total results number from APIresponse
        this.response = movieListResponse.response; // extract response boolean from APIresponse
    }
}
