import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { fetchFilms } from 'redux/bundles/films';

const mapStateToProps = (state) => ({
  isFetching: state.films.isFetching,
  films: state.films.items
});

const actions = { fetchFilms };

export class Films extends React.Component {
  componentDidMount() {
    this.props.fetchFilms();
  }

  getFilms() {
    return this.props.films || [];
  }

  renderTableBody() {
    return (
      <tbody>{this.renderTableBodyRows()}</tbody>
    );
  }

  renderTableBodyRows() {
    return this.getFilms().map((film, i) => {
      return (
        <tr key={i}>
          <td><Link to={"people/" + film.episode_id}>{film.title}</Link></td>
        </tr>
      );
    });
  }
  renderFilmsTable() {
    return (
    <div className="container-fluid bg-2 text-center">
      <h3 id="titlesStyle">StarWar Movie Titles List</h3>
      <table className="table fadeIn animated">
        {this.renderTableBody()}
      </table>
    </div>
    );
  }

  renderSpinner() {
    return <div>Loading...</div>;
  }

  render() {
    return this.props.isFetching
      ? this.renderSpinner()
      : this.renderFilmsTable();
  }
}

Films.propTypes = {
  fetchFilms: React.PropTypes.func,
  isFetching: React.PropTypes.bool,
  films: React.PropTypes.array
};

export default connect(mapStateToProps, actions)(Films);
