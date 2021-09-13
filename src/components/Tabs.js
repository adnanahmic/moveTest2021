import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import '../App.css'

class Tabs extends React.Component {
    render() {
        const {onSelect} = this.props;
        return (
            <ul className="nav nav-wrapper">
                <li className="nav-item" onClick={()=> {onSelect('movies'); this.props.history.push("/");}}>
                    <div className="nav-item nav-link">Movies</div>
                </li>
                <li className="nav-item"  onClick={()=> {onSelect('shows'); this.props.history.push("/");}}>
                    <div className="nav-item nav-link">TV Shows</div>
                </li>
            </ul>
        )
    }
}
export default withRouter(Tabs);