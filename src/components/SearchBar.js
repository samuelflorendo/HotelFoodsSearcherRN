import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({onChangeTerm , term, onTermSubmit}) => {

    return(
        <View style ={styles.background}>
            <Feather name = "search" style = {styles.feather}/>
            <TextInput 
            placeholder = "Search Hotel" 
            style = {styles.inputStyle}
            value = {term}
            onChangeText = {onChangeTerm}
            onEndEditing = {onTermSubmit}
            />
        </View>
    );

};
const styles = StyleSheet.create({
    background:{
        backgroundColor: 'rgb(200,200,200)',
        height: 50,
        borderRadius: 5, 
        margin: 10,
        flexDirection: 'row'
    },
    feather: {
        alignSelf: 'flex-start',
        paddingHorizontal: 9,
        paddingVertical: 9,
        fontSize: 32
    },
    inputStyle: {
        height: 50,
        fontSize: 18,
        flex: 1,
        paddingLeft: 8

    }
});

export default SearchBar;