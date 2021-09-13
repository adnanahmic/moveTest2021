import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './SearchBar';
import axios from 'axios';
import { withRouter } from "react-router-dom";
const movieApiUrl = 'http://localhost:3001/movies';
const showApiUrl = 'http://localhost:3001/shows';

class CardList extends React.Component {
  constructor(p){
    super(p);
    let apiToHit = p.selectedTab === 'movies' ? movieApiUrl : showApiUrl;
    this.getData(apiToHit, p.searchText);
    this.state = {
        list : [],
        search : p.searchText,
        selectedCard : null,
        fShowLoading : false
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedTab !== this.props.selectedTab) {
        let apiToHit = this.props.selectedTab === 'movies' ? movieApiUrl : showApiUrl;
        this.getData(apiToHit, this.props.searchText);
    }
  }
  getData = (apiUrl, search)=>{
    this.setState({fShowLoading : true});
    axios.get(apiUrl)
    .then(response=>{
      const regex = new RegExp(`^${search}`, `i`);
      const list = response.data.filter(v => regex.test(v.title));
      this.setState({list, search, fShowLoading: false});
    })
  }
  onSearch = (value)=>{
    this.props.onSearch(value);
    let apiToHit = this.props.selectedTab === 'movies' ? movieApiUrl : showApiUrl;
    if(value.length >= 3 || this.state.search.length > 0){
      this.getData(apiToHit, value);
    }
    else if(value.length === 0){
        this.getData(apiToHit, '');
        this.setState({ search: value });
    }
    else{
      this.setState({ search: value });
    }
  }
  handleCardDetail = (item)=>{
    let url = this.props.selectedTab === 'movies'? `movie/${item.id}` : `show/${item.id}`;
    this.props.history.push(url);
  }
  render(){
      const { list, search, fShowLoading } = this.state;
    return (
        <Container>
            <Search fShowLoading={fShowLoading} value={search} onChange={(value)=>{this.onSearch(value)}} />
            <br /> <br />
            <Row>
                {
                  list && list.length > 0 &&
                  list.map((item, i)=>{
                    return (
                        <Col key={i} xl={4} lg={4} md={6} sm={12}> 
                            <Card onClick={()=>{this.handleCardDetail(item)}} className="cards">
                                <Card.Img variant="top" src={item.poster} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
    
                    )
                  })  
                }
            </Row>
            {
              (!list || list.length ===0) &&
              <Row><h1>No Result Found</h1></Row>
            }
        </Container>
    )  
  }  
}
export default withRouter(CardList);
