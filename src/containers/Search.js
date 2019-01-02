// Use date picker to search between to dates
import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from "react-redux";
import { searchLaunches } from "../actions/searchActions";

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      date: "",
      showSearch: true
    };
  }
  static navigationOptions = {
    title: "Search",
    headerStyle: {
      backgroundColor: "#a2e080"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  toggleDatePicker = () =>
    this.setState({ isDatePickerVisible: !this.state.isDatePickerVisible });

  handleDatePicked = blob => {
    formatDate = date => {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    };
    this.setState({ date: formatDate(blob), showSearch: false });
    // clean this up
    this.props.searchLaunches(this.state.date);
    this.toggleDatePicker();
  };

  search = () => {
    navigation.navigate("Results", {
      results: this.props.results.state.launches
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.toggleDatePicker()}
          title={`Date: ${this.state.date}`}
        />
        <Button title="Search" onPress={() => this.search(this.state.date)} />
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.toggleDatePicker}
          mode="date"
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

const mapStateToProps = state => {
  return {
    results: state.searchResults
  };
};

const mapDispatchToProps = {
  searchLaunches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
