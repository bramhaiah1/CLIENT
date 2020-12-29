import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import { NavigationEvents } from "react-navigation";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { connect } from "react-redux";
import StarRating from "../views/StarRating";
import Searchbar from "../Screens/Searchbar"
import { getProducts, searchProducts } from '../Store/Actions/index'
class CategoriesProductsScreen extends Component {
  state = {
    filteredProducts: [],
    count: -12,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerRight: (
        <View style={{ flexDirection: "row" }}>

          <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item
              title="Favourtie"
              iconName="search"
              onPress={() => {
                navigation.navigate("Searchbar")
                console.log("Pressed");
              }}
            />
          </HeaderButtons>

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

  componentDidMount = () => {
    let category = this.props.navigation.getParam("title");
    this.props.getProducts();
    console.log(category)
    console.log(this.props.products)

    let products = this.props.products.filter((product) => {
      console.log(product.category_id)
      return product.category_id == category;

    });

    this.setState({
      filteredProducts: products,
    });
    let count = this.props.itemsCount.itemsCount;
    this.props.navigation.setParams({
      count,
    });
  };
  addToWishListHandler = (pro) => {
    this.props.addToWishList(pro);
    this.getItemsCount();
  };

  getItemsCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        let count = this.props.itemsCount.itemsCount;
        this.props.navigation.setParams({
          count: count,
        });
      }
    );
  };
  addCartHandler = (pro) => {
    let qty = 1;
    pro.quantity = qty;
    //console.log(this.state.count);
    this.props.addToCart(pro);
    this.getItemsCount();
    // this.props.itemsCount.itemsCount
  };

  loadProducts = (pro) => {
    let newProducts = {
      id: pro.item._id,
      category: pro.item.category_id,
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
      <TouchableOpacity onPress={
        () => {
          this.props.navigation.navigate("ProductDetails", { newProducts });

        }
      }>
        <View style={styles.productMain}>

          <View style={{ justifyContent: "space-around", alignContent: "center", marginRight: 20, marginLeft: 20, marginTop: 5 }}>
            <View style={{ overFlow: "hidden", paddingBottom: 10 }}>
              <Text numberOfLines={1} style={styles.text}>{pro.item.name}</Text>

            </View>

            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around", }}>
              <Text style={styles.text}> ${pro.item.price} /hr</Text>

              <StarRating


              />
            </View>
            <View style={{ width: "50%", height: 200, borderColor: "black", justifyContent: "center", alignSelf: "center" }}>
              <Image style={{ width: "100%", height: "95%", resizeMode: "contain", borderRadius: 10 }}
                source={{ uri: pro.item.img }} />
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>

              <Text style={styles.text}>  Rented : {pro.item.rent} </Text>
              <TouchableOpacity onPress={() => {
                this.addCartHandler(newProducts);
              }}>
                <FontAwesome5 name="shopping-bag" size={24} color="#44bcd8" style={{ paddingBottom: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around", paddingBottom: 20 }}>


              <Text style={styles.text}><Entypo name="location-pin" size={24} color="black" /> {pro.item.loc} </Text>
              <TouchableOpacity onPress={() => {
                this.addToWishListHandler(newProducts);
              }}>
                <Fontisto name="heart" size={20} color="#FF543C" />
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </TouchableOpacity>
    )

  }







  render() {
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
    flexDirection: "column",
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
    backgroundColor: "white"
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


const mapStateToProps = state => {
  return {
    products: state.products.products,
    itemsCount: state.itemsCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
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
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesProductsScreen);
