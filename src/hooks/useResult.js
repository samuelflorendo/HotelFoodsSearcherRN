import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params:{
                limit: 50,
                term: searchTerm,
                location: 'san francisco'
                }
            }
            );
            setResult(response.data.businesses);
        }catch (e) {
            setErrorMessage('Something Went Wrong!')
        }
    };

    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, result, errorMessage];
};