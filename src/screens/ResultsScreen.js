import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import HomeScreen from './HomeScreen';

import {db} from '../config';
class ResultsScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        datavals: {},
        presentToDo: '',
      };
    }
    componentDidMount() {
        db.ref('/IMU_LSM6DS3/1-setFloat/').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let items = {...data};
            console.log(data);
            this.setState({
                datavals: items,
              });
          });
    }
    render() {
        //let datavalsKeys = Object.keys(this.state.datavals);

        <View><Text>Data: {datavals}</Text></View>
        return{
        }
  
  }}

/* 
 const ResultsScreen = () => {
    const friends = [
        {name: 'Friend One', age: 20},
        {name: 'Friend Two', age: 45},
        {name: 'Friend Three', age: 32},
        {name: 'Friend Four', age: 27},
        {name: 'Friend Five', age: 53},
        {name: 'Friend Six', age: 30},
        {name: 'Friend Seven', age: 56},

    ];

    return (
     <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={friend =>friend.name}
        data = {friends}
        renderItem={({item}) => {
            return(
                <Text style = {styles.textStyle}>
                    Name: {item.name} , Age: {item.age}
                </Text>
            );
        }}
     />
    );
}; */

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
}); 

 

    
export default ResultsScreen;