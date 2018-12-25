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
import { addFavorite, deleteFavorite } from "../actions/favoritesActions";

class LaunchDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      favorite: Boolean
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
    const favorite = navigation.getParam("favorite");
    return fetch(`https://launchlibrary.net/1.4/launch/${id}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.launches,
          favorite: favorite
        });
      });
  }

  infoLinks() {
    const mission = this.state.data[0].lsp;
    if (mission.wikiURL) {
      return (
        <Button
          title="More Info"
          onPress={() => Linking.openURL(mission.wikiURL)}
        />
      );
    } else {
      null
    }
  }

  videoLinks() {
    const video = this.state.data[0].vidURLs;
    if (video.length) {
      return (
        <Button
          title="Watch Video"
          onPress={() => Linking.openURL(launch.vidURLs[0])}
        />
      );
    } else {
      null
    }
  }
  delete(id) {
    this.props.deleteFavorite(id)
    this.props.navigation.pop()
  }

  favorite(launch) {
    this.props.addFavorite(launch)
    this.setState(favorite = true)
  }

  favorites(launch) {
    if(this.state.favorite){
      return (
        <Button
        title="delete fav"
        onPress={() => this.delete(launch.id)}
      />
      )
    } else {
      return (
        <Button
        title="Favorite"
        onPress={() => this.props.addFavorite(launch)}
      />
      )
    }
  }

  missionInfo () {
    const mission = this.state.data[0].missions
    if(mission.length ) {
      return (
        <Text> {mission[0].description} </Text>
      )
    } else {
      return <Text>No further info at this time</Text>
    }
  }

  render() {
    const launch = this.state.data[0];
    if (!launch) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <View>
            <Image
              style={{ width: "100%", height: 350 }}
              source={{ uri: launch.rocket.imageURL }}
            />
            {this.favorites(launch)}
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
              <Text style={styles.headerFont}>Mission Details:</Text>
              {this.missionInfo()}
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

const mapDispatchToProps = {
  addFavorite,
  deleteFavorite
};

export default connect(
  null,
  mapDispatchToProps
)(LaunchDetail);
