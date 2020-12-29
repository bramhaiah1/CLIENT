import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Rating, AirbnbRating } from "react-native-ratings";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import { connect } from "react-redux";
class WishListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
    filteredProducts: [],
    count: -12,
  };
  componentDidMount = () => {
    let products = this.props.wishListItems.wishListItems;
    this.setState({
      filteredProducts: products,
    });
  };
  getItemsCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        let count = this.props.itemsCount.itemsCount;
        console.log(count)
        this.props.navigation.setParams({
          count: count,
        });
      }
    );
    let products = this.props.wishListItems.wishListItems;
    this.setState({
      filteredProducts: products,
    });
  };


  addCartHandler = (pro) => {
    let qty = 1;
    pro.quantity = qty;
    //console.log(this.state.count);
    this.props.addToCart(pro);
    this.getItemsCount();
    // this.props.itemsCount.itemsCount

    // this.props.itemsCount.itemsCount
  };
  deleteFromCartHandler = (pro) => {
    this.props.deleteFromCart(pro);
    setTimeout(this.getItemsCount, 1000);
  };

  loadProducts = (pro) => {
    let newProducts = {
      id: pro.item.id,
      category: pro.item.category,
      img: pro.item.img,
      name: pro.item.name,
      price: pro.item.price,
      rent: pro.item.rent,
      loc: pro.item.loc,
      qty: pro.item.qty,
      rating: pro.item.rating,
      favourite: pro.item.favourite,
    };
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("ProductDetails", { newProducts });
        }}
      >
        <View style={styles.productMain}>
          <View style={{ width: "35%", height: 200 }}>
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
            <Text style={{ color: "#666666" }}>
              Category : {pro.item.category}
            </Text>
            <Text style={styles.text}>Price : ${pro.item.price} /hr</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 5 }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  width: 135,
                  backgroundColor: "#44bcd8",
                  borderRadius: 20,


                }}
                onPress={() => {
                  this.addCartHandler(newProducts);
                  this.deleteFromCartHandler(newProducts);
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Move to Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.deleteFromCartHandler(newProducts);
                }}
              >
                <Fontisto
                  name="trash"
                  size={24}
                  color="black"
                  style={{ marginLeft: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    console.log(this.props.wishListItems.wishListItems);
    if (!this.props.wishListItems.wishListItems.length) {
      return (
        <View style={{ margin: 10, alignItems: "center" }}>
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
                justifyContent: "center",
                alignSelf: "center"
              }}
              source={require("../src/image/wishlist.png")}
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
                Start Shopping
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
          <FlatList
            data={this.state.filteredProducts}
            renderItem={this.loadProducts}
          />
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
    wishListItems: state.wishListItems,
    itemsCount: state.itemsCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemData) => {
      dispatch({
        type: "ADD_TO_CART",
        item: itemData,
      });
    },
    addToWishList: (itemData) => {
      dispatch({
        type: "ADD_TO_WISH_LIST",
        item: itemData,
      });
    },
    deleteFromCart: (itemData) => {
      dispatch({
        type: "DELETE_FROM_CART",
        item: itemData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListScreen);
