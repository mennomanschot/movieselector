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
  findNewMovie: () => void;
  title = 'movieselector';
  apiResponse = [];
  movies = [];
  movies2 = [];
  hide90s = false;
  hide00s = false;
  movieID: any;
  movieName: any = 'Batman';
  url = 'http://www.omdbapi.com/?s=Batman&apikey=ee46de9e';
  movieUrl = () => `http://www.omdbapi.com/?s=${this.movieName}&apikey=ee46de9e`;

  toggle90s() {
    this.hide90s = !this.hide90s;
    console.log('90s clicked');
    }

  toggle00s() {
    this.hide00s = !this.hide00s;
    console.log('00s clicked');
    }


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.movieUrl = () => `http://www.omdbapi.com/?s=${this.movieName}&apikey=ee46de9e`;
    this.http.get<MovieList>(this.movieUrl()).subscribe(data => {
      this.movies = data.Search; // this.movies contains array of moviedata
      this.movies.forEach((elem) => {
        const movie = new Movie(elem); // creates movie objects of type Movie
        console.log(movie.title + ' has ID: ' + movie.imdbID);
        const movieID = movie.imdbID; // movieID contains imdbID of movie
        const movieDetailsUrl = () => `http://www.omdbapi.com/?i=${movieID}&apikey=ee46de9e`; // constructs api url of movieID

        this.http.get<MovieDetails>(movieDetailsUrl()).subscribe(detailDataResponse => {
          const movieDetails = new MovieDetails(detailDataResponse);
          this.movies2.push(movieDetails);
        });
      });
      console.log(this.movies2);
    });
  }
}
