import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from '../components/CardDetail';

class TvShowDetail extends React.Component {
    render() {
        const {id} = this.props.match.params;
        return (
            <CardDetail page="show" id={id} />
        )
    }
}

export default TvShowDetail;