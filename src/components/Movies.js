import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './CardList';
import CardDetail from './CardDetail';
import Tabs from './Tabs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Movies extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            selectedTab : 'movies',
            selectedItem : null,
        };
    }
    showCardDetailPg = (item)=>{
      this.setState({selectedItem: item});
    }
    render() {
        const { selectedTab } = this.state;
        return (
            <Router>
                <Tabs onSelect={(tab)=>{ this.setState({selectedTab : tab}) } } />
                    <div className="main-container">
                        <Switch>
                            <Route exact path="/movie/:id" component={CardDetail} />
                            <Route exact path="/shows/:id" component={CardDetail} />
                            <Route exact path="/" component={()=> <CardList selectedTab={selectedTab} showCardDetailPg={(item)=>{this.showCardDetailPg(item)}} /> } />
                        </Switch>
                    </div>
            </Router>
        )
    }
}

export default Movies;