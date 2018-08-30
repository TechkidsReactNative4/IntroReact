import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import CustomComponent from './CustomComponent';

class App extends Component {
  state = {}
  render() {
    return (
      //height: wrap_cotent, width: match_parent
      //flex: 
      <View style={{
        flexDirection: 'column',
        marginTop: 15,
        flex: 1
      }}>
        <CustomComponent name={'efgh'} color={'red'} />
        <CustomComponent name={'efgh'} color={'yellow'} />
        <CustomComponent name={'xyz'} color={'green'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textYellow: {
    backgroundColor: 'yellow',
    color: 'red',
    flex: 3
  },
  textRed: {
    backgroundColor: 'red',
    color: 'red',
    flex: 3
  },
  textGreen: {
    backgroundColor: 'green',
    color: 'red',
    flex: 1
  }
})

export default App;