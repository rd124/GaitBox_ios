//Walking Monitor App Results Screen Code
//Last edited on 7-20-21 by Riddhi Ranjithkumar
//This code renders the Results screen, which is where the user views the test results

import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

import {db} from '../config';


const ResultsScreen = () => { 
    let velocity = [];

    // Obtaining values from backend
    try{
       db.ref('/GB/resultvals/').on('value', (snapshot) => {
            console.log("SNAPSHOT", snapshot.val());
            let vel = snapshot.val();
            
            velocity = Object.values( vel );
            console.log("velocity", velocity);
        })
    }
    catch(e){
        <View><Text>"Error connecting to server"</Text></View>
    }
        return (<View style = {styles.main}>
        <Text style = {styles.rtext}>Test Results</Text>
        <Text style = {styles.rtext}></Text>

        
         <Text style = {styles.resulttext}>Start Distance: {velocity[2]} m</Text>
         <Text style = {styles.resulttext}>Start Time: {velocity[3]} s</Text>
         <Text style = {styles.resulttext}>Stop Distance: {velocity[0]} m</Text>
         <Text style = {styles.resulttext}>Stop Time: {velocity[1]} s</Text>
         <Text style = {styles.resulttext}>Speed: {velocity[4]} m/s</Text>
         </View>
        ); 
    };

 

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    resulttext: {
        top:10,
        fontSize: 18,

        textAlign: 'center',
        backgroundColor: "white",
        padding:10,
        marginLeft: '7.5%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "7.5%",
        overflow: 'hidden',
        borderRadius: 20,
        bottom:10
      },
      rtext: {
        top: 10,
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    main:{
        flex:1,
        backgroundColor: "#FF8B3D"
    }
}); 

 

    
export default ResultsScreen;