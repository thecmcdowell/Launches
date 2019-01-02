import React from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";

export default class SearchResults extends React.PureComponent {
  static navigationOptions = {
    title: "Results",
    headerStyle: {
      backgroundColor: "#a2e080"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  // because the service returns data differently with search than it does with regular loading, ListItem cannot be used in it's current state
  renderListItem(item) {
    const launch = item.item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(
        'ResultDetail', { id: launch.id, name: launch.name, favorite: false}
      )} style={styles.row}>
        <View style={styles.rowDetail}>
          <Text>{launch.name}</Text>
          <Text>{launch.windowstart}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    const results = navigation.getParam("results", "no-results");
    console.log("props", results);
    return (
      <View>
        <FlatList
          renderItem={this.renderListItem}
          data={results}
          keyExtractor={item => `${item.id}`}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd"
  },
  rowDetail: {
    flex: 1
  },
  list: {
    maxWidth: "100%"
  }
});
