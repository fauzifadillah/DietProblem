//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import all basic components
import RNFS from 'react-native-fs';
export default class Screen1 extends Component {
  constructor(){
   super();
   this.state = {MatrixInserted : false, x1 :"", x2 : ""};
  }
  // push(){
  //
  //    this.setState({MatrixInserted : true});
  //
  //    let x1 = this.state;
  //         x1.x1 = x1;
  //         this.setState(x1);
  //         console.log(x1);
  //
  //         let x2 = this.state;
  //              x2.x2 = x2;
  //              this.setState(x2);
  //              console.log(x2);
  //
  //    var path = RNFS.DocumentDirectoryPath + '/x1x2.txt';
  //    console.log(path);
  //    // write the file
  //    RNFS.writeFile(path, x1, 'utf8')
  //      .then((success) => {
  //        console.log('FILE WRITTEN!');
  //      })
  //      .catch((err) => {
  //        console.log(err.message);
  //      });
  //   }
  //Screen1 Component
  render() {
    return (
    <ScrollView style={styles.container}>
    <Text style={{fontSize:30, fontWeight:'700', textAlign: 'center'}}> -- Builded by passion -- </Text>
    </ScrollView>
);

  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
