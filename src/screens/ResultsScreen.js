import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

import {db} from '../config';

/* class ResultsScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {studentslist : []}
    }
    componentDidMount() {
        firebase.database().ref('/IMU_LSM6DS3/1-setFloat/').on('value', snapShot => {
            let studentslist = [];
            snapShot.forEach(snap=>{
                studentslist.push(snap.val());
            });
            this.setState({studentslist: studentslist});
        });
        render();{
            return(
                <View>Data: {studentslist}</View>
            )
        }
    }
} */
            

    /* constructor() {
      super();
      this.state = {
        datavals: {},
        presentToDo: '',
      };
    }
    componentDidMount() {
        db.ref('/IMU_LSM6DS3/1-setFloat/').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let todoitems = {...data};
            console.log(data);
            this.setState({
                datavals: todoitems,
              });
          });
    }
    render() {
        //let datavalsKeys = Object.keys(this.state.datavals);

        <View><Text>Data: {todoitems}</Text></View>
        return{
        }
  
  }} */
//console.log("RESULT RESULT RESULT");


const ResultsScreen = () => { 
   // console.log("INSIDE INSIDE RESULT RESULT");
    let velocity = [];
    //const  [velocity, setVelocity] = useState(0);
    // console.log("BEFORE CONNECTING TO DATABASE");
/* 
       db.ref('/IMU_LSM6DS3/1-setFloat/').on('value', (snapshot) => {
            console.log("SNAPSHOT", snapshot.val());
            let vel = snapshot.val();
            
            //console.log("AFTER CONNECTING TO DATABASE");
            velocity = Object.values( vel );
            console.log("velocity", velocity);
        })

    
        return (<View>
        <Text>Distance: {velocity[0]} cm</Text>
         <Text>Time: {velocity[1]} ms</Text>
         <Text>Speed: {velocity[2]} cm/ms</Text>
         </View>
        );  */
    };


 

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
}); 

 

    
export default ResultsScreen;