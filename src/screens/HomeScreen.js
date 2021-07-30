//Walking Monitor App Home Screen Code
//Last edited on 7-20-21 by Riddhi Ranjithkumar
//This code renders the home screen, which contains buttons to navigate to other screens,
//as well as the "reset for new test" button

import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import {db} from '../config';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = ({navigation}) => {
  const[resettest,setResettest] = useState("no");
  
  if(resettest=="reset"){
    db.ref('/GB/Reset/').set({resettest});
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    setResettest("no");
  }, []);

  let velocity = [];
  let currentstart = "";
  let currentstop = "";
    // Obtaining values from backend
       db.ref('/GB/resultvals/').on('value', (snapshot) => {
            //console.log("SNAPSHOT", snapshot.val());
            let vel = snapshot.val();
            
            velocity = Object.values( vel );
       })
      db.ref('/GB/Close/closedistance/').on('value', (snapshot) => {
            currentstop = snapshot.val();
       })
       db.ref('/GB/Far/fardistance/').on('value', (snapshot) => {
             currentstart = snapshot.val();
       })

  return (
    <SafeAreaView style = {styles.main}>
      <ScrollView
      refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      <Text style = {styles.refreshtext}>Pull down to refresh and view results</Text>

      <Text style = {styles.headtext}></Text>

      <Text style = {styles.rtext}>Current Settings</Text>
      <View style = {{flexDirection:"row"}}>
      <Text style = {styles.currtext}>Start: {currentstart} m</Text>
      <Text style = {styles.currtext}>Stop: {currentstop} m</Text>
      </View>
      <Text style = {styles.rtext}></Text>
      <Text style = {styles.rtext}></Text>

      <Text style = {styles.rtext}>Test Results</Text>
        
         <Text style = {styles.resulttext}>Start Distance - {velocity[1]} m</Text>
         <Text style = {styles.resulttext}>Stop Distance - {velocity[0]} m</Text>
         <Text style = {styles.resulttext}>Time Elapsed - {parseFloat(velocity[2]).toFixed(2)} s</Text>
         <Text style = {styles.resulttext}>Velocity - {parseFloat(velocity[3]).toFixed(2)} m/s</Text>
         
         <Text style = {styles.headtext}></Text>

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
            {text: "OK", onPress: () => {Alert.alert("Wait for LED to begin walking",
             "After test refresh home screen to view results."),
              setResettest("reset")}}
            ])
            }>
            <Text>Press to Start New Test</Text>
            </TouchableOpacity>

            <Text style = {styles.rtext}></Text>

         <TouchableOpacity
      style = {styles.button}
      onPress={() => navigation.navigate('TestD')}>
      <Text>Change Parameters</Text>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    );
      }
  
  const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: "#FF8B3D"
    },
    button:{
      alignItems: "center",
      padding: 10,
      //backgroundColor: "#C0C0C0",
      backgroundColor: "#DCDCDC",
      overflow: 'hidden',
      borderRadius: 20,
      marginLeft: '20%',
      marginRight: '20%',
      fontSize: 30,
      bottom: 10,

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
    btwtext: {
      fontSize: 10
    },
    resulttext: {
      top:10,
      fontSize: 16,

      textAlign: 'center',
      backgroundColor: "white",
      padding:10,
      marginLeft: '13%',
      borderRadius: 5,
      marginTop: 5,
      marginRight: "13%",
      overflow: 'hidden',
      borderRadius: 20,
      bottom:10
      },
      currtext: {
        top:10,
        marginStart: "5%",
        marginEnd: "5%",
        padding: 10,
        //marginEnd: "5%",
        fontSize: 16,
        flexDirection: "row",
        textAlign: 'center',
        //backgroundColor: "#A9A9A9",
        backgroundColor: "#DCDCDC",

        color: "black",
        flexDirection: "row",
        width: "40%",
        padding:10,
        borderRadius: 5,
        marginTop: 5,
        overflow: 'hidden',
        borderRadius: 20,
        bottom:20
        },
    rtext: {
        fontSize: 20,
        color: 'white',
        marginLeft: '5%',

    },
    refreshtext: {
      fontSize: 15,
      color: 'white',
      marginLeft: '5%',
      textAlign: 'center',
      top:20

  },
  })
  
  export default HomeScreen;
  
