import React from 'react'
import { View, Text, ScrollView, Image, Button} from 'react-native'
import { connect } from 'react-redux'
import {getLaunchInfo} from '../actions/getLaunchesActions'

class LaunchDetail extends React.PureComponent{
    static navigationOptions = {
        title: 'Detail'
    }

    componentDidMount() {
        const { navigation } = this.props
        const id = navigation.getParam('id', 'no-id')
        this.props.getLaunchInfo(id)
    }

    infoLinks() {
        const mission = this.props.launch.state.launches[0].missions[0]
        console.log('Mission', mission)
        if (mission.wikiURL != '') {
            return (
                <Button
                    title='More Info'
                    onPress={() => Linking.openURL(mission.wikiURL)}
                />
            )
        }
    }


    render() {
        const { navigation } = this.props
        const id = navigation.getParam('id', 'no-id')
        const launch = this.props.launch.state.launches[0]
        return(
            <ScrollView>
                <View>
                    <Image
                        style={{ width: 350, height: 350}}
                        source={
                          {  uri:
                            launch.rocket.imageURL}
                        }
                    />
                    <Text>{launch.name}</Text>
                </View>
                <View>
                    <Text>
                        Launch Window
                    </Text>
                    <Text>
                        {launch.windowstart}
                    </Text>
                    <Text>
                        {launch.windowend}
                    </Text>
                </View>
                <View>
                    <Text>
                        Mission
                    </Text>
                    <Text>
                        Location:
                    </Text>
                    <Text>
                        {launch.location.name}
                    </Text>
                    <Text>
                        Mission Details
                    </Text>
                    <Text>
                        {launch.missions[0].description}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        launch: state.launchInfo
    }
}

const mapDispatchToProps = {
    getLaunchInfo
}

export default connect(mapStateToProps, mapDispatchToProps) (LaunchDetail)