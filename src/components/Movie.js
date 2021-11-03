import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFav, removeFav } from '../actions/favActions';

const Movie = (props) => {
    const { id } = useParams(); // Pulls the ID from the URL
    const { push } = useHistory();

    const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id)); // ID's movie by URL id
    
    const handleClickDelete = (id) => {
        props.deleteMovie(id);
        push('/movies');
    }

    const handleClickAddFav = (movie) => { 
        props.addFav(movie)
    }

    console.log('MOVIE.JS: ', props); //<----- CONSOLE LOG
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={ () => {handleClickAddFav(movie)} }>Favorite</span>
                            <span className="delete">
                                <input 
                                    type="button" 
                                    className="m-2 btn btn-danger" 
                                    value="Delete"
                                    onClick={() => { handleClickDelete(movie.id) } }
                                />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        movies: state.movieReducer.movies,
        displayFavorites: state.favReducer.displayFavorites
    })
}

export default connect(mapStateToProps, { deleteMovie, addFav, removeFav })(Movie);