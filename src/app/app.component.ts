import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieList } from './_models/movielist.model';
import { Movie } from './_models/movie.model';
import { MovieDetails } from './_models/movieDetails.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'movieselector';
  apiResponse = [];
  movies = [];
  moviesDetails = [];
  hide90s = false;
  hide00s = false;
  movieID: any;
  movieName: any = 'Batman';

  movieUrl = () => `http://www.omdbapi.com/?s=${this.movieName}&apikey=ee46de9e`;

  toggle90s() {
    this.hide90s = !this.hide90s;
    }

  toggle00s() {
    this.hide00s = !this.hide00s;
    }

constructor(private http: HttpClient) {}

  movieSearch() {
    this.http.get<MovieList>(this.movieUrl()).subscribe(data => {
      this.movies = data.Search;        // this.movies contains array of moviedata
      this.movies.forEach((elem) => {   // loop through moviedata, extract movieID's and construct url of moviedetails API
        const movie = new Movie(elem);
        const movieID = movie.imdbID;
        const movieDetailsUrl = () => `http://www.omdbapi.com/?i=${movieID}&apikey=ee46de9e`; // constructs api url of movieID

        this.http.get<MovieDetails>(movieDetailsUrl()).subscribe(detailDataResponse => {
          const movieDetails = new MovieDetails(detailDataResponse);
          this.moviesDetails.push(movieDetails); // push moviedetails in array for the view.
        });
      });
      // console.log(this.moviesDetails);
    });
  }

  newMovie() {                         // work in progress: bind var movieName to inputform, and update movieSearch() with new urls
    // console.log(this.movieName);
    this.moviesDetails = [];
    this.movieSearch();
  }

  ngOnInit(): void {
    this.movieSearch();
  }
}
