

import * as actionTypes from './actionTypes';



import axios from "axios"
import { set } from 'immutable';


export const setProducts = (products) => {

    return {
        type: actionTypes.SET_PRODUCTS,
        products: products,

    }

};

export const getProducts = () => {
    return dispatch => {

        axios.post(" http://c574a3558a86.ngrok.io/product").then(resp => {
            const products = [];
            const response = resp.data
            for (let key in response) {
                products.push({
                    ...response[key],
                    key: key
                });



                console.log(products)


            }; dispatch(setProducts(products));



        })


    }
};

export const searchProducts = (query) => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        searchQuery: query
    }
};






