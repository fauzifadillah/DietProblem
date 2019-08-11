import React, { Component } from 'react';
import { AppRegistry, View, TextInput, StyleSheet, Button, Text, Image, ImageBackground, ScrollView} from 'react-native';
import RNFS from 'react-native-fs';
import LPSolver from '../jsLPSolver/src/solver.js';

class UselessTextInput extends Component {
  render() {
    return (

      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {4000}
      />

    );
  }
}

export default class UselessTextInputMultiline extends Component {



  constructor(props) {
    super(props);
    this.state = {
      text: '',
      final_result_show: ['Result will be shown here!'],
      array: [],
    };
  }

  _signInAsync = async () => {
      console.log(this.state.text)
      var path = RNFS.DocumentDirectoryPath + '/x1x2.dat';
      console.log(path);
      // write the file
      RNFS.writeFile(path, this.state.text, 'utf8')
        .then((success) => {
          console.log('Matrix Inserted !');
        })
        .catch((err) => {
          console.log(err.message);
        });
        var solver = require("../jsLPSolver/src/solver.js"),
        model = {};
          //Read Data from File
          read_process = RNFS.readFile(path, "utf8", function(e,d){
              // Convert the File Data to a JSON Model
                        });
          read_process.then(function(result) {
                        model = solver.ReformatLP(result)
                        console.log(model);
                        // console.log(solver.Solve(model));
                        final_res = solver.Solve(model);
                        this.setState({final_result_show: final_res})
                        console.log(final_res);
                      }.bind(this));

                        // arr = Object.entries(final_res).map((key) => {
                        //   //console.log(key, final_res[key]);
                        //   let k = key;
                        //   //console.log(k);
                        //   this.setState({array: k})
                        //   console.log(this.state.array);
                        // });
// model = solver.ReformatLP(xxx);
// console.log(model);
//           // Solve the LP
//           // console.log(resultz);
//           // console.log(results);
//           console.log(solver.Solve(model));

          };
          // <Text>
          //   {this.state.final_result_show.x1}
          // </Text>
  render() {
    return (
<ImageBackground source={require('../images/backgroundunpad.jpg')} style={styles.backgroundImage} >
     <ScrollView style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >

       <UselessTextInput
       style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}
        selectable={true}
         multiline = {true}
         placeholder = "Insert Data"
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />

       <Button
       color="#000"
       title="Do the calculation!"
       onPress={this._signInAsync}
       />

     <Text style={{fontWeight: 'bold', fontSize: 18}}>{JSON.stringify(this.state.final_result_show, 0, 10)}</Text>
     </ScrollView>
     </ImageBackground>
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

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },
  submit: {
   backgroundColor: '#68a0cf',
   overflow: 'hidden',
}

});
