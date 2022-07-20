const apikey='8e20b264';

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
          });
      };
  }

  export function removeMovieFavorite(id){
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
  }