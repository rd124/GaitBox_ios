//Walking Monitor App Home Screen Code
//Last edited on 7-20-21 by Riddhi Ranjithkumar
//This code renders the home screen, which contains buttons to navigate to other screens,
//as well as the "reset for new test" button

import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import {db} from '../config';

const HomeScreen = ({navigation}) => {
  //updating backend on whether to "reset"
  const[resettest,setResettest] = useState("no");
  db.ref('/GB/Reset/').set({resettest});


  return (
    <View style = {styles.main}>
      <Text style={styles.headtext}>GaitBox Test</Text>
      <Text style = {styles.headtext}></Text>

      <TouchableOpacity
      style = {styles.button}
      onPress={() => setResettest("reset")}>
      <Text>Press to Start New Test</Text>
      </TouchableOpacity>
      <Text style = {styles.headtext}></Text>

      <TouchableOpacity
      style = {styles.button}
      onPress={() => navigation.navigate('TestD')}>
      <Text>Test Distance</Text>
      </TouchableOpacity>
      <Text style = {styles.headtext}></Text>


      <TouchableOpacity
      style = {styles.button}
      onPress={() => navigation.navigate('Results')}>
      <Text>View Results</Text>
      </TouchableOpacity>

    </View>
    );
  };
  
  const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: "#FF8B3D"
    },
    button:{
      alignItems: "center",
      padding: 10,
      //backgroundColor: "#C0C0C0",
      backgroundColor: "white",
      overflow: 'hidden',
      borderRadius: 20,
      marginLeft: '20%',
      marginRight: '20%',
      fontSize: 30

    },
    bottom:{
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 20,
        textAlign: "center",
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'black',
        flex: 1
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
    resulttext: {
        top:10,
        fontSize: 18,

        textAlign: 'center',
        backgroundColor: "#C0C0C0",
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
        fontSize: 20,
        color: 'white',
        marginLeft: '5%',

    },
  })
  
  export default HomeScreen;
  