import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList,TextInput, Alert} from 'react-native';

import {db} from '../config';



const TestDistance = () => { 
    const [distance, setDistance] = useState(0);
    console.log(distance);
    if(setDistance!=0){
        //console.log("The value is not zero");
        db.ref('/IMU_LSM6DS3/Parameters/').set({distance});
        }

    return (
    <View>
        <TextInput
            style = {styles.input}
            autoCapitalize ="none"
            autoCorrect={false}
            numeric value
            //keyboardType = {'numeric'}
            placeholder="Type here to specify a distance!"
            onChangeText={text => setDistance(text)}
            onSubmitEditing = {() => {
                Alert.alert(
                    "Set Distance?",
                    "This will change the parameters of the test",
                    [
                        {text: "Cancel", onPress: () => Alert.alert("Cancel Pressed")},
                        {text: "Okay", onPress: () => Alert.alert("Distance changed"),style: "cancel"} 
                    ],
                    {
                      cancelable: true,
                    }
                  );
                
             }}
            />   
            
    </View>

    );


};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    input: {
        textAlign: "center",
        width:300,
        margin: 15,
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10
    }
}); 

 

    
export default TestDistance;