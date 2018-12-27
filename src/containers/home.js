import React from "react"
import { connect } from 'react-redux'
import {View, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Text} from 'react-native'
import {LaunchListItem} from '../components/index'
import {getLaunchList} from '../actions/getLaunchesActions'
class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
    navigation = this.props.navigation
  }
    static navigationOptions = {
        title: 'Launches',
        headerStyle: {
          backgroundColor: '#a2e080',
      },
      headerTitleStyle: {
          color: 'white'
        }
      };

    componentWillMount() {
      this.props.getLaunchList()
    }

    renderFlatList(item) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('LaunchDetail', {
          id: item.item.id,
          name: item.item.name,
          favorite: false
        })} >
        <LaunchListItem 
          item = {item}
        />
        </TouchableOpacity>
      )
    }

    render(){
      let launches = this.props.launches.state.launches
      if(!launches){
        return (
          <View style={styles.container}>
            <ActivityIndicator />
        </View>
      )

      } else {
        return (
            <View style={styles.container}>
            <FlatList
              renderItem={this.renderFlatList}
              data={launches}
              keyExtractor={item => `${item.id}`}
              style={styles.list}
            />
          </View>
        )}
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
    },
    list: {
      maxWidth: "100%"
    }
  });

  const mapStateToProps = state => {
    return {
      launches: state.launchList
    }
  }

  const mapDispatchToProps = {
    getLaunchList
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)