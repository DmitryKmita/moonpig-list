import React from 'react';
import axios from 'axios';

const PER_PAGE = 12;
const HTTP_URL_SEARCH = 'https://search.moonpig.com/api/products?size=' + PER_PAGE + '&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job';
const HTTP_URL_SINGLE = 'https://www.moonpig.com/uk/api/product/product/?mpn=';

class ApiService extends React.Component {

    getItems(page) {
        return new Promise((success, error) => {
            let url = HTTP_URL_SEARCH + '&start=' + ((page-1) * PER_PAGE);
            axios.get(url)
                .then(data => {
                    success(data.data);
                })
                .catch(err => {
                    error(err);
                })
        });
    }

    getItem(productId) {
        return new Promise((success, error) => {
            let url = HTTP_URL_SINGLE + productId;
            axios.get(url)
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