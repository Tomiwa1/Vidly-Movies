import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 0
    };
  }
  deleteMovie = () => {
    this.props.deleteFilm();
  };
  render() {
    const { Title, Genre, Stock, Rate } = this.props;
    return (
      <tr>
        <td>
          <h4>{Title}</h4>
        </td>
        <td>
          <h4>{Genre}</h4>
        </td>
        <td>
          <h4>{Stock}</h4>
        </td>
        <td>
          <h4>{Rate}</h4>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.deleteMovie}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
