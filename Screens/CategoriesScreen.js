import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
class CategoriesScreen extends Component {
  state = {
    categories: [
      {
        id: "1",
        title: "Outdoors",
        image: require("../src/image/outdoors1.jpeg"),
      },
      {
        id: "2",
        title: "Paint",
        image:
          require("../src/image/paint1.jpg"),
      },
      {
        id: "3",
        title: "Power",
        image:
          require("../src/image/power1.jpg"),
      },
      {
        id: "4",
        title: "Garden",
        image:
          require("../src/image/Garden1.jpg"),
      },

    ],
  };

  renderItemsFunction = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate("CategoriesProducts", {
            title: itemData.item.title,
          });
        }}
      >
        <View>
          <Image
            source={{ uri: itemData.item.image }}
            style={{ width: 120, height: 120, borderRadius: 70 }}
          />
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {" "}
          {itemData.item.title}{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.categories}
          numColumns={2}
          renderItem={this.renderItemsFunction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f5f5f0",
  },
  item: {
    flex: 1,
    height: 180,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: "halfmoon_bold",
    alignContent: "flex-end",
    marginTop: 10,
  },
});

export default CategoriesScreen;
