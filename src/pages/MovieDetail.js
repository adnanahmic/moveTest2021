import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from '../components/CardDetail';
    
class MovieDetail extends React.Component {
    render() {
        const {id} = this.props.match.params;
        return (
            <CardDetail page="movie" id={id} />
        )
    }
}

export default MovieDetail;