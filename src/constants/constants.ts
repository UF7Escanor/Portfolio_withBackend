export const BASE_URL="";

//User APIs
export const CREATE_USER_URL="/api/v1/users";
export const LOGIN_USER_URL="/api/v1/users/auth";
export const LOGOUT_USER_URL="/api/v1/users/logout";
export const GET_ALL_USERS_URL="/api/v1/users";
export const GET_SPECIFIC_USER_URL="/api/v1/users/profile"; 
export const UPDATE_USER_URL="/api/v1/users/profile";
export const DELETE_USER_URL="/api/v1/users/delete-user/:id";
export const ADMIN_UPDATE_USER_URL="/api/v1/users/update-user/:id";
export const ADMIN_DELETE_USER_URL="/api/v1/users/delete-user/:id";


//GENRE APIs
export const CREATE_GENRE_URL="/api/v1/genre";
export const GET_ALL_GENRES_URL="/api/v1/genre/genres";
export const UPDATE_GENRE_URL="/api/v1/genre/:id";
export const DELETE_GENRE_URL="/api/v1/genre/:id";
export const GET_SPECIFIC_GENRE_URL="/api/v1/genre/:id";



//Movie APIs
export const CREATE_MOVIE_URL="/api/v1/movies/create-movie";
export const GET_ALL_MOVIES_URL="/api/v1/movies/all-movies";
export const GET_SPECIFIC_MOVIE_URL="/api/v1/movies/specific-movie/:id"
export const UPDATE_MOVIE_URL="/api/v1/movies/update-movie/:id";
export const DELETE_MOVIE_URL="/api/v1/movies/delete-movie/:id";    
export const MOVIE_REVIEW_URL="/api/v1/movies/:id/review";
export const DELETE_COMMENT_URL="/api/v1/movies/delete-comment";
