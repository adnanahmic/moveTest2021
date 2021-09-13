import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

class Search extends React.Component {
    render() {
        const {onChange, value, fShowLoading} = this.props;
        const handleSearch = (e)=>{
            onChange(e.target.value);
        }
        return (
            <Row id="search">
                <Col className="search-input-wrapper" xl={10} lg={10} md={12} sm={12}>
                    <input 
                        value={value}
                        className="search-input"
                        placeholder={"search"}
                        onChange={(e) => handleSearch(e)}
                    />
                    {
                        fShowLoading &&
                        <div className="spinner"><i class="fa fa-spinner"></i></div>
                    }
                </Col>
            </Row>
        )
    }
}

export default Search;