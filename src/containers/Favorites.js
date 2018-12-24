import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {LaunchListItem} from '../components/index'

class FavoritesScreen extends React.Component {
    constructor(props){
        super(props)
        navigation = this.props.navigation
    }
    static navigationOptions = {
        title: 'Favorites',
        headerStyle: {
            backgroundColor: '#a2e080',
        },
        headerTitleStyle: {
            color: 'white'
          }
    }

    renderFlatList(item) {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('FavoriteDetail', {
            id: item.item.id,
            name: item.item.name
          })} >
          <LaunchListItem 
            item = {item}
          />
          </TouchableOpacity>
        )
      }

    render() {
        const favorites = this.props.favorites
        console.log('favs', favorites)
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Favorites Screen</Text>
            <FlatList
                renderItem={this.renderFlatList}
                data={favorites}
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
    list:{
        maxWidth: '100%'
    }
  });

  const mapStateToProps = state => {
      return {
          favorites: state.favorites
      }
  }
  

  export default connect(mapStateToProps)(FavoritesScreen)