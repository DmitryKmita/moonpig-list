import React from 'react';
import axios from 'axios';

const HTTP_URL_SEARCH = 'https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job';

class ApiService extends React.Component {

    constructor(props) {
        super(props);
    }


    getItems() {
        return new Promise((success, error) => {
            axios.get(HTTP_URL_SEARCH)
                .then(data => {
                    success(data.data);
                })
                .catch(err => {
                    error(err);
                })
        });

    }
}

export default ApiService;