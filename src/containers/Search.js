// Use date picker to search between to dates
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Search'
    }

    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Search Screen</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });