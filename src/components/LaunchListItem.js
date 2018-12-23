import React from 'react'
import { View, Text, Image } from 'react-native'

const LaunchListItem = item => {
    const launch = item.item.item
    return (
      <View style={styles.row}>
        <Image
          style={styles.rowIcon}
          source={{ uri: launch.rocket.imageURL }}
        />
        <View style={styles.rowDetail}>
          <Text>
            {launch.missions.name}
          </Text>
          <Text>
            {launch.rocket.name}
          </Text>
          <Text>
            {launch.location.countryCode}
          </Text>
          <Text>
            {launch.windowstart}
          </Text>
        </View>
      </View>
    )
  }
  
  const styles = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    rowIcon: {
      width: 65,
      height: 65,
      marginRight: 20
    },
    rowDetail: {
      flex: 1
    }
  }
  export default LaunchListItem