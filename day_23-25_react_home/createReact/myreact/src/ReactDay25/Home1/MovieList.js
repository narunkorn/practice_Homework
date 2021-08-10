import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

const MovieList = props => (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
            <div className="col-sm-12">
                <div className="card-deck">
                    {props.movies.length === 0
                        ? 'Bring me Movie Array!!!'
                        : props.movies.map(movie => (
                            <MovieCard key={movie.id}
                                movie={movie} />
                        ))
                    }


                </div>
            </div>
        </div>
    </div>
)

MovieList.defaultProps = {
    movies: []
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList
