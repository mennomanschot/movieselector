export class MovieDetails {
    title: string;
    description: string;
    year: string;
    imdbID: string;
    runtime: string;
    rating: string;
    type: string;
    posterUrl: string;


    constructor(details) {
        this.title = details.Title;
        this.description = details.Plot;
        this.year = details.Year;
        this.imdbID = details.imdbID;
        this.runtime = details.Runtime;
        this.rating = details.Rated;
        this.type = details.Type;
        this.posterUrl = details.Poster;
    }
}
