export class Movie {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    posterUrl: string;

    constructor(movieSearch: any) {
        this.title = movieSearch.Title;
        this.year = movieSearch.Year;
        this.imdbID = movieSearch.imdbID;
        this.type = movieSearch.Type;
        this.posterUrl = movieSearch.Poster;
    }
}
