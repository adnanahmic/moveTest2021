import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import MovieDetail from './pages/MovieDetail';
import TvShowDetail from './pages/TvShowDetail';

import Tabs from './components/Tabs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
    constructor(p){
        super(p);
        this.search = '';
        // this.search = {
        //   movies : '',
        //   shows : ''
        // };
        this.state = {
            selectedTab : 'movies',
            selectedItem : null
        };
    }
    showCardDetailPg = (item)=>{
      this.setState({selectedItem: item});
    }
    handleSearch = (value)=>{
      let { selectedTab} = this.state;
      this.search = value;
    //   this.search[selectedTab] = value;
    }
    render() {
        const {selectedTab} = this.state;
        return (
            <Router>
                <Tabs onSelect={(tab)=>{ this.setState({selectedTab : tab});
                   } } />
                    <div className="main-container">
                        <Switch>
                            <Route exact path="/movie/:id" component={MovieDetail} />
                            <Route exact path="/show/:id" component={TvShowDetail} />
                            <Route exact path="/" component={()=> <CardList selectedTab={selectedTab} onSearch={this.handleSearch}
                            searchText={this.search}
                            /> }
                            
                            />
                        </Switch>
                    </div>
            </Router>
        )
    }
}

export default App;