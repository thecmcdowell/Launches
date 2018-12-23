import React from "react"
import { connect } from 'react-redux'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {getLaunchList} from '../actions/getLaunchesActions'
class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Launches'
      };

    componentDidMount() {
      this.props.getLaunchList()
    }

    render(){
      console.log('PROPS', this.props)
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Home Screen</Text>
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

  const mapStateToProps = state => {
    return {
      launches: state
    }
  }

  const mapDispatchToProps = {
    getLaunchList
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)