//Walking Monitor App TestDistance Screen Code
//Last edited on 7-20-21 by Riddhi Ranjithkumar
//This code renders the Test Distance screen, which is where the user inputs the parameters for the test
//There are options for Start and Stop, as well as a button to submit these distances 

import React, {useState} from 'react';
import {Text, StyleSheet, View,TextInput, Alert,Button, NetInfo} from 'react-native';
import {db} from '../config';

const TestDistance = () => { 

    const[subm,setSubm] = useState(0);   // state of submit button
    const [fardistance, setFardistance] = useState(0); //state of start distance button
    const [closedistance, setClosedistance] = useState(0); //state of stop distance button

    //sending test parameters to backend
    if(subm==1){
    if(setFardistance!=0 ){
        db.ref('/GB/Far/').set({fardistance});
        }
    if(setClosedistance!=0){
        db.ref('/GB/Close/').set({closedistance});
            }
        }

    return (
    <View style = {styles.main}>
        <Text style = {styles.headtext}>Set parameters</Text>
        <Text style = {styles.rtext}> Enter distance in meters.</Text>
        <Text style = {styles.headtext}></Text>
        <Text style = {styles.rtext}>Start</Text>
        <TextInput
            style = {styles.input}
            autoCapitalize ="none"
            autoCorrect={false}
            //numeric value
            keyboardType = "number-pad" returnKeyType={ 'done' }
            placeholder="0"
            placeholderTextColor = "white"
            onChangeText={text => setFardistance(text.toString())}
            onSubmitEditing = {() => {
                Alert.alert(
                    "Set Far Distance?",
                    "This will change the parameters of the test",
                    [
                        {text: "Cancel", onPress: () => Alert.alert("Cancel Pressed")},
                        {text: "Okay", onPress: () => Alert.alert("Far Distance changed"),style: "cancel"} 
                    ],
                    {
                      cancelable: true,
                    }
                  );
                
             }}
            />
            <Text style = {styles.rtext}>Stop</Text>
            <TextInput
            style = {styles.input}
            autoCapitalize ="none"
            autoCorrect={false}
           // numeric value
            keyboardType = "number-pad" returnKeyType={ 'done' }
            placeholder= "0"
            placeholderTextColor = "white"
            onChangeText={text => setClosedistance(text.toString())}
            onSubmitEditing = {() => {
                Alert.alert(
                    "Set Close Distance?",
                    "This will change the parameters of the test",
                    [
                        {text: "Cancel", onPress: () => Alert.alert("Cancel Pressed")},
                        {text: "Okay", onPress: () => Alert.alert("Close Distance changed"),style: "cancel"} 
                    ],
                    {
                      cancelable: true,
                    }
                  );
                
             }}
            />
            <Text style = {styles.headtext}></Text>

            <Button
            style = {styles.button}
            title = "Set distances"
            onPress={() =>  Alert.alert(
                "Change distance thresholds?",
                "This will change the parameters of the test",
                [
                  {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {Alert.alert("Submitted"), setSubm(1)}}
                ]
            )}
            ></Button>
    </View>

    );


};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    input: {
        textAlign: "center",
        margin: 15,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",

    },
    main:{
        flex:1,
        backgroundColor: "#FF8B3D"
    },
    headtext: {
      fontSize: 30,
      top:5,
      marginVertical: 20,
      marginHorizontal: 20,
      textAlign: "center",
      bottom: 10,
      color: "black"
    },
    rtext: {
        fontSize: 20,
        color: 'black',
        marginLeft: '5%',

    },
    button:{
      alignItems: "center",
      padding: 10,
      backgroundColor: "white",
      overflow: 'hidden',
      borderRadius: 20,
      marginLeft: '20%',
      marginRight: '20%',
      fontSize: 30

    },
}); 

 

    
export default TestDistance;