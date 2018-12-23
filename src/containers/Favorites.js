import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class FavoritesScreen extends React.Component {
    static navigationOptions = {
        title: 'Favorites'
    }

    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Favorites Screen</Text>
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