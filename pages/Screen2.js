//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput, Button, Image, ImageBackground, ScrollView } from 'react-native';
// import all basic components
import RNFS from 'react-native-fs';
export default class Screen1 extends Component {
  //Screen1 Component
//   _signInAsync = async () => {
//       console.log(this.userName)
//       console.log(this.Password)
//
//       var path = RNFS.DocumentDirectoryPath + '/x1x2.txt';
//       console.log(path);
//       // write the file
//       RNFS.writeFile(path, this.userName, 'utf8')
//         .then((success) => {
//           console.log('FILE WRITTEN!');
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//
// };
  render() {
    return (
      <ImageBackground source={require('../images/backgroundunpad.jpg')} style={styles.backgroundImage} >
          <ScrollView>
            <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 20, marginTop: 20, textAlign:'center'}}> EXAMPLES </Text>
                  <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}> The simple problem: </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x1 >= 1 </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x2 >= 1 </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x1 + x2 >= 2 </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14, marginBottom: 5}}> minimize x1 + x2 (= maximize -(x1 + x2)), with x1 integer </Text>
                        <Text style={{ fontWeight: '400', fontSize: 18, fontWeight: 'bold'}}> Can be written as follows in format: </Text>

                        <Text style={{ fontWeight: '400', fontSize: 14}}> -x1 -x2; </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> '/* or min: x1 + x2; */' </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x1 >= 1; </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x2 >= 1; </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14}}> x1 + x2 >= 2; </Text>
                        <Text style={{ fontWeight: '400', fontSize: 14, marginBottom: 10}}> int x1; </Text>

            <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}> Example with integer variables: </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> min: -x1 -2 x2 +0.1 x3 +3 x4; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> r_1: +x1 +x2  > 5; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> r_2: +2 x1 -x2 >= 0; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> r_3: -x1 +3 x2 >= 0; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> r_4: +x3 +x4 >= 0.5; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> x3 >= 1.1; </Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}> int x3, x4;  </Text>

                  <Text style={{ fontWeight: '400', fontSize: 14}}>min: d1 + e1;</Text>
<Text style={{ fontWeight: '400', fontSize: 14}}></Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}>-0.5 d1 + e1 >= 3;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14}}>d1 + e1 >= 6;</Text>
                <Text style={{ fontWeight: '400', fontSize: 14}}>3 d1 - 2 e1 >= 16;</Text>









          </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 0,
    paddingTop: 2,
    alignItems: 'stretch',
    marginTop: 0,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },
});
