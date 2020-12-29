import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import { Avatar, Badge, withBadge } from "react-native-elements";

import { connect } from "react-redux";
class CartScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Items in Cart",
    };
  };
  state = {
    itemsInCart: null,
    itemsCount: -1,
  };

  componentDidMount = () => {
    this.getItemsCount();
  };

  getItemsCount = () => {
    let Items = this.props.cartItems.cartItems.map((item) => {
      return item;
    });

    this.setState({
      itemsInCart: Items,
      itemsCount: this.props.itemsCount.itemsCount,
    });
  };

  loadproducts = (pro) => {


    return (
      <View>
        <View style={styles.productMain}>
          <View style={{ width: "35%", height: 130 }}>
            <Image
              style={{
                width: "100%",
                height: "95%",
                resizeMode: "contain",
                borderRadius: 5,
              }}
              source={{ uri: pro.item.img }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-around",
              alignContent: "center",
              marginLeft: 20,
            }}
          >
            <View style={{ overFlow: "hidden" }}>
              <Text numberOfLines={1} style={styles.text}>
                {pro.item.name}
              </Text>
            </View>
            <Text style={styles.text}>Price : ${(pro.item.price) * (pro.item.quantity)} /hr</Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              {pro.item.quantity > 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    this.props.decreaseQuantity(pro.item.id);
                    setTimeout(this.getItemsCount, 1000);
                  }}
                >
                  <Icon
                    name="minussquareo"
                    size={25}
                    color="black"
                    style={{ marginRight: 10, marginTop: 2 }}
                  />
                </TouchableOpacity>
              ) : (
                  <TouchableOpacity
                    disabled={true}
                    onPress={() => {
                      this.props.decreaseQuantity(pro.item.id);
                      setTimeout(this.getItemsCount, 1000);
                    }}
                  >
                    <Icon
                      name="minussquareo"
                      size={25}
                      color="gray"
                      style={{ marginRight: 10, marginTop: 2 }}
                    />
                  </TouchableOpacity>
                )}

              <Text style={{ fontSize: 20 }}>{pro.item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.increaseQuantity(pro.item.id);
                  setTimeout(this.getItemsCount, 1000);
                }}
              >
                <Icon
                  name="plussquareo"
                  size={25}
                  color="black"
                  style={{ marginLeft: 10, marginTop: 2 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.deleteItem(pro.item.id);
                  setTimeout(this.getItemsCount, 1000);
                }}
                style={{
                  flexDirection: "row",
                  marginLeft: "30%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <FontAwesome name="trash" size={24} color="black" style={{ paddingLeft: 30 }} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: "90%",
            backgroundColor: "#44bcd8",
            borderRadius: 20,

            marginBottom: 20,
          }}
          onPress={() => {

            alert(
              "Order Placed!",
              "Thanks for Ordering. You will receive your order in 2-4 business days. Cash On Delivery!",
              [
                {
                  text: "OK",
                  onPress: () => console.log("Order Placed Success!"),
                },
              ]

            );
            this.props.navigation.navigate("order", { pro });
            this.props.orderPlaced();
            setTimeout(this.getItemsCount, 1000);
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Order Now
            </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    if (this.state.itemsCount <= 0) {
      return (
        <View style={styles.main}>
          <NavigationEvents
            onDidFocus={() => {
              this.getItemsCount();
            }}
          />
          <View style={[styles.centerElement, { height: 450 }]}>
            <Image
              style={{
                borderRadius: 20,
                height: 200,
                width: 260,

                alignSelf: "center"
              }}
              source={require("../src/image/empty-cart-png.png")}
            ></Image>
            <TouchableOpacity
              style={{
                marginTop: 400,

                width: 150,
                backgroundColor: "#44bcd8",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "absolute",
                alignSelf: "center",
                height: 35,
                top: 10
              }}
              onPress={() => this.props.navigation.navigate("AllProducts")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                RENT NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.main}>
          <NavigationEvents
            onDidFocus={() => {
              this.getItemsCount();
            }}
          />
          <FlatList data={this.state.itemsInCart} renderItem={this.loadproducts} />

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,

  },
  bookMain: {
    marginTop: 10,
    width: "100%",
    height: 500,

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  productMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  text: {
    color: "black",
    fontFamily: "halfmoon_bold",
    fontSize: 15,
    fontWeight: "bold",
    overflow: "hidden",
    width: "90%",
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    itemsCount: state.itemsCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (itemData) => {
      dispatch({
        type: "DELETE_ITEM",
        item: itemData,
      });
    },
    decreaseQuantity: (itemData) => {
      dispatch({
        type: "DECREASE_QUANTITY",
        item: itemData,
      });
    },
    increaseQuantity: (itemData) => {
      dispatch({
        type: "INCREASE_QUANTITY",
        item: itemData,
      });
    },
    orderPlaced: () => {
      dispatch({
        type: "ORDER_PLACED",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
