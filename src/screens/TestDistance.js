//Walking Monitor App TestDistance Screen Code
//Last edited on 7-22-21 by Riddhi Ranjithkumar
//This code renders the Test Distance screen, which is where the user inputs the parameters for the test
//There are options for Start and Stop, as well as a button to submit these distances 

import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, View,TextInput, Alert,Button, NetInfo} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {db} from '../config';

const TestDistance = () => { 

    const[subm,setSubm] = useState(0);   // state of submit button
    const [fardistance, setFardistance] = useState("0"); //state of start distance button
    const [closedistance, setClosedistance] = useState("0"); //state of stop distance button

    //reset
    const[resettest,setResettest] = useState("no");
    if(resettest!="no"){
    db.ref('/GB/Reset/').set({resettest});
  }

    //sending test parameters to backend
    if(subm==1){
    if(fardistance!=0 ){
        db.ref('/GB/Far/').set({fardistance});
        }
    if(closedistance!=0){
        db.ref('/GB/Close/').set({closedistance});
            }
        }

    return (
    <ScrollView style = {styles.main}>
        <Text style = {styles.headtext}>Change Parameters</Text>
        <Text style = {styles.rtext}>Start (m)</Text>
        <TextInput
            style = {styles.input}
            autoCapitalize ="none"
            autoCorrect={false}
            //numeric value
            keyboardType = "numeric" returnKeyType={ 'done' }
            placeholder= "Type a Distance"
            placeholderTextColor = "gray"
            onChangeText={text => setFardistance(text.toString())}
            />

            <Text style = {styles.rtext}>Stop (m)</Text>

            <TextInput
            style = {styles.input}
            autoCapitalize ="none"
            autoCorrect={false}
            keyboardType = "numeric" returnKeyType={ 'done' }
            placeholder= "Type a Distance"
            placeholderTextColor = "gray"
            onChangeText={text => setClosedistance(text.toString())}
            />

            <Text style = {styles.headtext}></Text>

            <TouchableOpacity
            style = {styles.button}
            onPress={() =>  Alert.alert(
                "Change distance thresholds?",
                "This will change the parameters of the test",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {Alert.alert("Submitted"), setSubm(1)}}
                ]
            )}>
            <Text>Change distances</Text>
            </TouchableOpacity>

           <Text style = {styles.rtext}></Text>

            <TouchableOpacity
            style = {styles.button}
            onPress={() => Alert.alert(
                "This will start a new test",
                "Wait for the LED to begin walking",
            [
            {
            text: "Cancel",
            style: "cancel"
            },
            {text: "OK", onPress: () => {Alert.alert("Wait for the LED to begin walking"), setResettest("reset")}}
            ])
            }>
            <Text>Press to Start New Test</Text>
            </TouchableOpacity>
            </ScrollView>

    );


};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    input: {
        textAlign: "center",
        marginBottom: 15,
        marginTop: 15,
        marginLeft: "15%",
        marginRight: "15%",
        borderRadius: 30,
        //borderWidth: 1,
        padding: 10,
        backgroundColor: "white",

    },
    main:{
        backgroundColor: "#FF8B3D",
        flex: 1,
        //flexShrink: 1
    },
    headtext: {
      fontSize: 25,
      top:5,
      marginVertical: 20,
      marginHorizontal: 20,
      textAlign: "center",
      bottom: 10,
      color: "white"
    },
    rtext: {
        fontSize: 20,
        color: 'white',
        marginLeft: '5%',

    },
    button:{
      alignItems: "center",
      padding: 10,
      backgroundColor: "#DCDCDC",
      overflow: 'hidden',
      borderRadius: 20,
      //borderWidth: 1,
      marginLeft: '20%',
      marginRight: '20%',
      fontSize: 30,
      bottom: 10,

    },
}); 

 

    
export default TestDistance;