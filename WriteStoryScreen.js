import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';

export default class WriteStoryScreen extends React.Component {
    render() {
        return(
          <View style={styles.container}>
            
            <View >
            <TextInput 
              style={styles.TitleinputBox}
              placeholder="Title of the story"
             />
            </View>
            <View >
            <TextInput 
              style={styles.AuthorinputBox}
              placeholder="Author of the story"/>

            </View>
            <View>

            <TextInput 
              style={styles.WriteinputBox}
              placeholder="Write the story"
              multiline = {true}/>
            </View>
            <View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
         
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    TitleinputBox:{
      width: 500,
      height: 40,
      borderWidth: 2,
      marginTop:18,
      fontSize: 20
    },
   AuthorinputBox:{
        width: 500,
        height: 40,
        borderWidth: 2,
        marginTop:18,
        fontSize: 20
      },
    WriteinputBox:{
        width: 500,
        height: 400,
        borderWidth: 2,
        marginTop:18,
        fontSize: 20
      },
      submitButton:{
        backgroundColor:'grey',
        width:150,
        height:50,
        marginTop:15
      },
      buttonText:{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        fontWeight:'bold'
      },
  });