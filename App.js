import React from 'react'
import HomeScreen from './src/containers/home'
import SearchScreen from './src/containers/Search'
import FavoritesScreen from './src/containers/Favorites'
import LaunchDetail from './src/containers/LaunchDetail'
import SettingsScreen from './src/containers/Settings'
import SearchResults from './src/containers/SearchResults'
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './src/reducers/index'

// Redux stuff
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['searchResults']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const client = axios.create({
    baseURL: 'https://launchlibrary.net/1.4/',
    responseType: 'json'
})
let store = createStore(persistedReducer, applyMiddleware(axiosMiddleware(client)))
let persistor = persistStore(store)

// Nav stuff
const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    LaunchDetail: { screen: LaunchDetail}
})
const SearchStack = createStackNavigator({
    Search: {screen: SearchScreen},
    Results: {screen: SearchResults},
    ResultDetail: { screen: LaunchDetail}
})
const FavoritesStack = createStackNavigator({
    Favorites: {screen: FavoritesScreen},
    FavoriteDetail: { screen: LaunchDetail}
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Favorites: FavoritesStack,
    Settings: SettingsScreen
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#a2e080'
        }
    
}
}
)

const AppContainer = createAppContainer(TabNavigator)

class app extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <AppContainer />
                </PersistGate>
            </Provider>
        )
    }
}

export default app