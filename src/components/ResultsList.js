import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import ResultDetails from '../components/ResultDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
return(
    <View style = {styles.viewStyle}>
        <Text style = {styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor ={(result) => result.id}
            renderItem={({item}) =>{
                return(
                    <TouchableOpacity onPress = {() => navigation.navigate('Result', {id: item.id})}>
                        <ResultDetails result = {item}/>
                    </TouchableOpacity>
                )
            }}
        />

    </View>
);
};

const styles = StyleSheet.create({
 titleStyle: {
     fontSize: 18,
     fontWeight: 'bold', 
     marginLeft: 10
 },
 
 
});

export default withNavigation(ResultsList);