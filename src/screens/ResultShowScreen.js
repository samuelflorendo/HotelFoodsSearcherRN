import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    console.log(result)

    const getImage = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getImage(id);
    }, []);
    if(!result){
        return null;
    }

    return (
        <>
            <FlatList
                data = {result.photos}
                keyExtractor = {(items) => items}
                renderItem = {({item}) =>{
                    return <Image  style = {styles.imageStyle} source = {{uri: item}}/>
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
});

export default ResultShowScreen;