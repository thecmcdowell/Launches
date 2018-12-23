import React from "react"
import { connect } from 'react-redux'
import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import {LaunchListItem} from '../components/index'
import {getLaunchList} from '../actions/getLaunchesActions'
class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
    navigation = this.props.navigation
  }
    static navigationOptions = {
        title: 'Launches'
      };

    componentDidMount() {
      this.props.getLaunchList()
    }

    renderFlatList(item) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('LaunchDetail', {
          id: item.item.id,
          launchName: item.item.name
        })} >
        <LaunchListItem 
          item = {item}
        />
        </TouchableOpacity>
      )
    }

    render(){
      console.log('Test',  this.props.launches)
      let launches = this.props.launches
        return (
            <View style={styles.container}>
            <FlatList
              renderItem={this.renderFlatList}
              data={launches}
              keyExtractor={item => `${item.id}`}
              style={styles.list}
            />
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
    },
    list: {
      maxWidth: "100%"
    }
  });

  const mapStateToProps = state => {
    return {
      launches: state.launchList.state.launches
    }
  }

  const mapDispatchToProps = {
    getLaunchList
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)