import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './CardList';

class Movies extends React.Component {
    render() {
        return (
            <CardList page="movies" />
        )
    }
}

export default Movies;