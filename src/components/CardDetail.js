import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css'
const movieApiUrl = 'http://localhost:3001/movies';
const showApiUrl = 'http://localhost:3001/shows';

class CardDetail extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            itemDetail : {
                title : '',
                poster : '',
                detail : ''
            }
        }
        const {id} = p;
        const url = p.page === 'movie' ? `${movieApiUrl}/${id}` : `${showApiUrl}/${id}`;
        this.getData(url);
    }
    render() {
        const {itemDetail} = this.state;
        const {
            title,
            poster,
            detail
        } = itemDetail || {};
        return (
            <div className="card-detail-wrapper">
                <div className="card-detail-img-wrapper" >
                    <img className="card-detail-img" alt="poster" src={poster} />
                </div>
                <div className="card-detail-overview">
                    <div className="card-detail-title">{title}</div>
                    <h3>Overview</h3>
                    <p> {detail} </p>
                </div>
            </div>
        )
    }
    getData = (apiUrl)=>{
      axios.get(apiUrl)
      .then(response=>{
        this.setState({itemDetail: response.data});
      })
    }
}

export default CardDetail;