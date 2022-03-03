import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 5,
      movies: [
        {
          id: 1,
          Title: 'Terminator',
          Genre: 'Action',
          Stock: 6,
          Rate: 2.5
        },
        {
          id: 2,
          Title: 'Die Hard',
          Genre: 'Action',
          Stock: 5,
          Rate: 2.5
        },
        {
          id: 3,
          Title: 'Get Out',
          Genre: 'Thriller',
          Stock: 8,
          Rate: 3.5
        },
        {
          id: 4,
          Title: 'Trip to Italy',
          Genre: 'Comedy',
          Stock: 7,
          Rate: 3.5
        },
        {
          id: 5,
          Title: 'Airplane',
          Genre: 'Comedy',
          Stock: 7,
          Rate: 3.5
        }
      ]
    };
  }

  deleteContent = (id) => {
    const { movies } = this.state;
    const newMovies = movies.filter((movie) => movie.id !== id);
    this.setState({
      movies: newMovies
    });
    this.setState({ message: this.state.message - 1 });
  };
  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Showing {this.state.message} movies in the database </h1>
        <table className="table">
          <tr>
            <th scope="col">
              <h2>Title</h2>
            </th>
            <th scope="col">
              <h2>Genre</h2>
            </th>
            <th scope="col">
              <h2>Stock</h2>
            </th>
            <th scope="col">
              <h2>Rate</h2>
            </th>
            <th scope="col"></th>
          </tr>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              Title={movie.Title}
              Genre={movie.Genre}
              Stock={movie.Stock}
              Rate={movie.Rate}
              deleteFilm={this.deleteContent.bind(this, movie.id)}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default MovieList;
