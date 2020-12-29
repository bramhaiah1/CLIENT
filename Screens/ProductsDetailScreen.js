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
import StarRating from "../views/StarRating";

class ProductsDetailScreen extends Component {
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
  componentDidMount = () => {
    let count = this.props.itemsCount.itemsCount;
    console.log(count);
    this.props.navigation.setParams({
      count: count,
    });
  };

  getItemsCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        let count = this.props.itemsCount.itemsCount;
        console.log(count);
        this.props.navigation.setParams({
          count: count,
        });
      }
    );
  };
  addCartHandler = (pro) => {
    this.getItemsCount();
    //console.log(this.state.count);
    let qty = 1;
    pro.quantity = qty;
    this.props.addToCart(pro);
    // console.log(book);
    this.props.navigation.goBack();
    // this.props.itemsCount.itemsCount
  };

  render() {
    let pro = this.props.navigation.getParam("newProducts");
    console.log(pro)

    return (
      <ScrollView>
        <View style={styles.main}>
          <NavigationEvents
            onDidFocus={() => {
              this.getItemsCount();
            }}
          />
          <Image source={{ uri: pro.img }} style={styles.fitImage} />

          <View numberOfLines={1} style={styles.infoBox}>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Product : {pro.name}</Text>

            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Category : {pro.category}</Text>

            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Price : ${pro.price} /hr</Text>

            </View>
          </View>

          <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around", paddingTop: 10, }}>
            <StarRating />
          </View>

          <View style={{ alignItems: "center", paddingTop: 10, }}>
            <Badge >{pro.category}</Badge>
            <Badge>Most Rented this month</Badge>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",

                padding: 10,
                width: "50%",
                backgroundColor: "#44bcd8",
                marginBottom: 20,
                borderRadius: 30
              }}
              onPress={() => {
                this.addCartHandler(pro);
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20, }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18,
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
    borderRadius: 5,
    zIndex: -1,
    resizeMode: "contain",
    width: "100%",
    height: 300,
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsDetailScreen);
