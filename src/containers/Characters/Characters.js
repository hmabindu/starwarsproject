import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from 'redux/bundles/films';
import { fetchPeople } from 'redux/bundles/people';

const mapStateToProps = (state) => ({
    isFetching: state.films.isFetching,
    isFetchingPeople: state.people.isFetchingPeople,
    films: state.films.items,
    people: state.people.items
});
const actions = { fetchFilms, fetchPeople };


export class Characters extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount() {
        this.props.fetchFilms(this.props.params.id);
        this.props.fetchPeople();
    }
    getFilms() {
        return this.props.films || [];
    }
    getPeople() {
        return this.props.people || [];
    }
    render() {
        let characterList;
        for(var i=0;i<this.props.films.length;i++) {
            if (this.props.params.id == this.props.films[i].episode_id) {
                    characterList = (
                        <div>{this.props.films[i].characters}
                        </div>
                    )
            }
        }


        return (
            <div className="container-fluid bg-2 characterStyle">
                <h3 id="titlesStyle">Character List in Each Movie</h3>
                <br/>
                <br/>
                <br/>
                <div>{characterList}
                <br/>
                </div>
            </div>)
    }
}


Characters.propTypes = {
    fetchFilms: React.PropTypes.func,
    isFetching: React.PropTypes.bool,
    isFetchingPeople:React.PropTypes.bool,
    films: React.PropTypes.array
};
export default connect(mapStateToProps, actions)(Characters);