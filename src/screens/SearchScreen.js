import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResult();

    const filterResultByPrice = (price) => {
        return result.filter(result => {
            return result.price === price;
        });
    };
    console.log(result);
    return(
        <>
            <SearchBar 
            term = {term} 
            onChangeTerm = {setTerm}
            onTermSubmit = {() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
                <ResultsList 
                    results = {filterResultByPrice('$')}    
                    title = 'Cost Effective'
                    
                />
                <ResultsList 
                    results = {filterResultByPrice('$$')} 
                    title = 'Bit Pricier'
                    
                />
                <ResultsList 
                    results = {filterResultByPrice('$$$')} 
                    title = 'Big Spender'
                    
                />
            </ScrollView>
        </>
    );

};
const styles = StyleSheet.create({
    
});

export default SearchScreen;