import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Linking,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { addFavorite } from '../actions/favoritesActions'

class LaunchDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  static navigationOptions = {
    title: "Detail",
    headerStyle: {
      backgroundColor: "#a2e080"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  componentWillMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "no-id");
    const name = navigation.getParam("name", "no-name");
    return fetch(`https://launchlibrary.net/1.4/launch/${id}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.launches
        });
      });
  }

  infoLinks() {
    const mission = this.state.data[0].lsp;
    if (mission.wikiURL != "") {
      return (
        <Button
          title="More Info"
          onPress={() => Linking.openURL(mission.wikiURL)}
        />
      );
    }
  }

  addFavorite() {
    const id = this.state.data[0].id
      console.log('Faved', id)
  }

  videoLinks() {
    const launch = this.state.data[0];
    if (launch.vidUrls != []) {
      return (
        <Button
          title="Watch Video"
          onPress={() => Linking.openURL(launch.vidURLs[0])}
        />
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const launch = this.state.data[0];
    if (!launch) {
      return (
          <View >
      <ActivityIndicator />
      </View>
      )
    } else {
      return (
        <ScrollView>
          <View>
            <Image
              style={{ width: "100%", height: 350 }}
              source={{ uri: launch.rocket.imageURL }}
            />
            <Button
                title= 'Favorite'
                onPress={() => this.addFavorite()}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.nameStyle}>{launch.name}</Text>
              <Text style={styles.headerFont}>Launch Window:</Text>
              <Text>{launch.windowstart}</Text>
              <Text>{launch.windowend}</Text>
            </View>
            <View style={[styles.infoBox, { marginTop: 5 }]}>
              <Text style={[styles.headerFont, { fontSize: 25 }]}>
                Mission:
              </Text>
              <Text style={styles.headerFont}>Location:</Text>
              <Text>{launch.location.name}</Text>
              <Text style={styles.headerFont}>Mission Details</Text>
              <Text>{launch.missions[0].description}</Text>
            </View>
            {this.infoLinks()}
            {this.videoLinks()}
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  infoBox: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
    padding: 5
  },
  infoContainer: {
    paddingTop: 10
  },
  headerFont: {
    fontWeight: "bold"
  },
  nameStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    launch: state.launchInfo
  };
};

const mapDispatchToProps = {
    addFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchDetail);
