import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:40,textAlign:'center',}}>Read a story</Text>
        </View>
      );
    }
  }