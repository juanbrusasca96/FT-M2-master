import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div className="movie-detail">
                <h2>{this.props.movieDet.Title}</h2>
                <img src={this.props.movieDet.Posters} alt='img not found'></img>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movieDet: state.movieDetail
    }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);