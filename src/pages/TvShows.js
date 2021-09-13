import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './CardList';

class Shows extends React.Component {
    render() {
        return (
            <CardList page="shows" />
        )
    }
}

export default Shows;