import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from "react-native";



const HomeScreen = ({navigation}) => {

  return (
    <View style = {styles.main}>
      <Text style={styles.headtext}>GaitBox Test</Text>
      <Button
      title = "Test Distance"
    />
      <Button
      title = "View Results"
      onPress={() => navigation.navigate('Results')}
    />
      <Button
      title = "Reset"
    />
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#afeeee'
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
      fontSize: 30,
      //borderWidth: 1,
      //borderColor: 'red'
      marginVertical: 20,
      marginHorizontal: 20,
      textAlign: "center",
      bottom: 10
    },
    resulttext: {
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 20,
        textAlign: "left",
        bottom: 50

      }
  })
  
  export default HomeScreen;
  