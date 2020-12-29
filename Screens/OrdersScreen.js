
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import StarRating from "../views/StarRating"
class OrdersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <View>
            <Badge
              value={navigation.getParam("count")}
              status="primary"
              containerStyle={{ position: "absolute", right: 4, zIndex: 999 }}
            />
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
              <Item
                title="Favourtie"
                iconName="shopping-cart"
                onPress={() => {
                  navigation.navigate("Cart");
                }}
                style={{ marginTop: 4 }}
              />
            </HeaderButtons>
          </View>
        </View>
      ),
    };
  };
  state = {
    count: -12,
  };



  render() {
    let pro = this.props.navigation.getParam("pro");
    console.log(pro)

    return (
      <ScrollView>
        <View style={styles.productMain}>

          <Image source={{ uri: pro.item.img }} style={styles.fitImage} />

          <View numberOfLines={1} style={{ alignSelf: "center" }}>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Product : {pro.item.name}</Text>

            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Category : {pro.item.category}</Text>

            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Price : ${pro.item.price} /hr</Text>

            </View>
          </View>



        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  productMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    justifyContent: "center",
    marginTop: 20
  },
  rating: {
    marginTop: 10,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    borderRadius: 30
  },
  fitImage: {
    margin: 5,
    borderRadius: 5,
    zIndex: -1,
    resizeMode: "contain",
    width: "50%",
    height: 200,
  },

  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText: {
    fontSize: 15,
  },
  propText: {
    fontFamily: "halfmoon_bold",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 10
  },
});


export default OrdersScreen;
