import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';


const ResultDetails = ({result}) => {
return(
    <View style = {styles.viewStyle}>
        <Text style = {styles.name}>{result.name}</Text>
        <Image style = {styles.ImageStyle} source= {{uri: result.image_url}}/>
        <Text>{result.rating} Stars, {result.review_count} Review</Text>
    </View>
);
};

const styles = StyleSheet.create({
 titleStyle: {
     fontSize: 18,
     fontWeight: 'bold'
 },
 viewStyle:{
    marginLeft: 10,
    marginBottom: 10,
    
 },
 ImageStyle: {
     height: 250,
     width: 350,
     borderRadius: 5
 },
 name: {
     fontWeight: 'bold', 
 }
 
});

export default ResultDetails;