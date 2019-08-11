import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   FlatList,
   Image
   } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Compute from './components/Compute';
//import * as firebase from "firebase";




   const MenuInit = createStackNavigator(
     {

       Compute: Compute,
     },
     {
       initialRouteName: 'Compute',
       navigationOptions: {
         headerStyle: {
           backgroundColor: '#777777',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       },
     },
   );
   const Menu = createAppContainer(MenuInit);

   export default class Example extends Component {
     // componentWillMount() {
     //   var config = {
     //       apiKey: "AIzaSyAkn7CRbt_HTUl0ufWD6h_7HjyagnMUbjE",
     //       authDomain: "mcu-api.firebaseapp.com",
     //       databaseURL: "https://mcu-api.firebaseio.com",
     //       projectId: "mcu-api",
     //       storageBucket: "mcu-api.appspot.com",
     //       messagingSenderId: "713783123517"
     //
     //   };
     //       firebase.initializeApp(config);
     //
     //       firebase.database().ref('mcu/relay').set(
     //         {
     //           RELAY_1: 1,
     //           RELAY_2: 0
     //
     //         }
     //       ).then(() => {
     //           console.log("inserted!");
     //       }).catch((error) => {
     //           console.log(error);
     //       });
     // }
     // constructor() {
     //        super();
     //        this.state = {
     //              dataSource: []
     //        };
     // }
     //
     // renderItem = ({item})=> {
     //   return (
     //    <View  style={{ flex: 1, flexDirection: 'row', marginBottos: 3 }} >
     //    <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.picture }} />
     //    <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
     //    <Text  styLe={{ fontSize: 18, color: 'green', morginBottom: 15}} > {item.name} </Text>
     //    <Text  style={{ fontsize: 16, color: 'red' }} > {item.age} </Text>
     //      </View>
     //    </View>
     //     )
     // }
     //
     // componentDidMount() {
     //      const url = "http://www.json-generator.com/api/json/get/cpdiipfvSa?indent=4";
     //      fetch(url).then((response)=>response.json())
     //                .then((responseJson)=> {
     //                  this.setState({
     //                    dataSource : responseJson
     //                  })
     //                 })
     //                 .catch((error)=> {
     //                   console.log(error);
     //                 })
     // }


     render() {
        // return (
        //
        //
        //   <View>
        //       <Text> Hello</Text>
        //       <Text> Hello</Text>
        //
        //       <FlatList
        //        data={this.state.dataSource}
        //        renderItem={this.renderItem}
        //        />
        //   </View>
        //    )
        return <Menu />;

     }
   }
