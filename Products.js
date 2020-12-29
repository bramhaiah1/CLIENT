import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";
import { withNavigation } from "react-navigation";
import axios from "axios"


const CATEGORY = [
  "All",
  "Outdoors",
  "Paint",
  "Power",
  "Garden"
];

const All = [
  {
    id: 1,
    imageUri: require("../src/image/Paint/Paint Striper.jpg"),
    name: "Paint Striper",
    price: 6,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 2,
    imageUri: require("../src/image/Outdoors/RuckSack.jpg"),
    name: "RuckSack",
    price: 1,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 3,
    imageUri: require("../src/image/Power/driller.jpg"),
    name: "Driller",
    price: 7,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 4,
    imageUri: require("../src/image/Outdoors/Tent.jpg"),
    name: "Tent",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 5,
    imageUri: require("../src/image/Power/Pressure washer.jpg"),
    name: "Pressure washer",
    price: 13,
    rent: "36 times",
    loc: "Est. 5.3 KMs",
    qty: 1
  },
  {
    id: 6,
    imageUri: require("../src/image/Paint/Paint Brushes.jpg"),
    name: "Paint Brushes",
    price: 3,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 7,
    imageUri: require("../src/image/Paint/Paint Roller.jpg"),
    name: "Paint Roller",
    price: 8,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 8,
    imageUri: require("../src/image/Paint/Paint Sprayers.jpg"),
    name: "Paint Sprayers",
    price: 7,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },

  {
    id: 9,
    imageUri: require("../src/image/Outdoors/toaster.jpg"),
    name: "Toaster",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 10,
    imageUri: require("../src/image/Power/Grinder(small angle).jpg"),
    name: "Grinder(small angle)",
    price: 9,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 11,
    imageUri: require("../src/image/Garden/rake.jpg"),
    name: "Rake",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 12,
    imageUri: require("../src/image/Power/Electric-Generator.png"),
    name: "Electric-Generator",
    price: 20,
    rent: "63 times",
    loc: "Est. 20 KMs",
    qty: 1
  },
  {
    id: 13,
    imageUri: require("../src/image/Power/Power-floater.jpg"),
    name: "Power-floater",
    price: 17,
    rent: "40 times",
    loc: "Est. 3 KMs",
    qty: 1
  },

  {
    id: 14,
    imageUri: require("../src/image/Garden/tractor.jpg"),
    name: "Tractor",
    price: 20,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 15,
    imageUri: require("../src/image/Garden/shop.jpg"),
    name: "Lawn Mower",
    price: 10,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },






];




const Outdoors = [
  {
    id: 1,
    imageUri: require("../src/image/Outdoors/toaster.jpg"),
    name: "Toaster",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 2,
    imageUri: require("../src/image/Outdoors/RuckSack.jpg"),
    name: "RuckSack",
    price: 1,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 3,
    imageUri: require("../src/image/Outdoors/Tent.jpg"),
    name: "Tent",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },

];

const Paint = [
  {
    id: 1,
    imageUri: require("../src/image/Paint/Paint Brushes.jpg"),
    name: "Paint Brushes",
    price: 3,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 2,
    imageUri: require("../src/image/Paint/Paint Roller.jpg"),
    name: "Paint Roller",
    price: 8,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 3,
    imageUri: require("../src/image/Paint/Paint Sprayers.jpg"),
    name: "Paint Sprayers",
    price: 7,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 4,
    imageUri: require("../src/image/Paint/Paint Striper.jpg"),
    name: "Paint Striper",
    price: 6,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  }

];

const Power = [
  {
    id: 1,
    imageUri: require("../src/image/Power/driller.jpg"),
    name: "Driller",
    price: 7,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 2,
    imageUri: require("../src/image/Power/Grinder(small angle).jpg"),
    name: "Grinder(small angle)",
    price: 9,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 3,
    imageUri: require("../src/image/Power/Electric-Generator.png"),
    name: "Electric-Generator",
    price: 20,
    rent: "63 times",
    loc: "Est. 20 KMs",
    qty: 1
  },
  {
    id: 4,
    imageUri: require("../src/image/Power/Power-floater.jpg"),
    name: "Power-floater",
    price: 17,
    rent: "40 times",
    loc: "Est. 3 KMs",
    qty: 1
  },
  {
    id: 5,
    imageUri: require("../src/image/Power/Pressure washer.jpg"),
    name: "Pressure washer",
    price: 13,
    rent: "36 times",
    loc: "Est. 5.3 KMs",
    qty: 1
  },



];

const Garden = [
  {
    id: 1,
    imageUri: require("../src/image/Garden/tractor.jpg"),
    name: "Tractor",
    price: 20,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 2,
    imageUri: require("../src/image/Garden/shop.jpg"),
    name: "Lawn Mower",
    price: 10,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  },
  {
    id: 3,
    imageUri: require("../src/image/Garden/rake.jpg"),
    name: "Rake",
    price: 5,
    rent: "63 times",
    loc: "Est. 6.3 KMs",
    qty: 1
  }

];
class Products extends Component {
  state = {
    currentIndex: 0,

    loading: true
  }
  componentDidMount() {

    //alert("inside");
    axios.post("http://localhost:3000/product").then(resp => {
      //alert(resp);


      let responsedata = {
      }
      var dataconvert = [];
      dataconvert = JSON.stringify(resp);


      responsedata = JSON.parse(dataconvert);
      alert(responsedata)
      this.setState({ loading: false })

    })
  }


  renderCategory = () => {
    if (this.state.loading) {
      return 'Loading...'
    }
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "black" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };
  renderItemList_All = () => {
    alert("ll")
    return All.map((item, i) => {
      alert("dddddddd")
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              name: item.name,
              img: item.imageUri,
              price: item.price,
              rent: item.rent,
              loc: item.loc,
              qty: item.qty

            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          price={item.price}


        />
      );
    });
  };
  renderItemList_Outdoors = () => {
    alert("okkk")
    return Outdoors.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              name: item.name,
              img: item.imageUri,
              price: item.price,
              rent: item.rent,
              loc: item.loc,
              qty: item.qty

            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          price={item.price}


        />
      );
    });
  };

  renderItemList_Paint = () => {
    return Paint.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              name: item.name,
              img: item.imageUri,
              price: item.price,
              rent: item.rent,
              loc: item.loc,
              qty: item.qty
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          price={item.price}

        />
      );
    });
  };
  renderItemList_Power = () => {
    return Power.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              name: item.name,
              img: item.imageUri,
              price: item.price,
              rent: item.rent,
              loc: item.loc,
              qty: item.qty
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          price={item.price}

        />
      );
    });
  };
  renderItemList_Garden = () => {
    return Garden.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              name: item.name,
              img: item.imageUri,
              price: item.price,
              rent: item.rent,
              loc: item.loc,
              qty: item.qty
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          price={item.price}

        />
      );
    });
  };
  renderItemList = () => {
    if (this.state.loading) {
      return 'Loading...'
    }
    if (this.state.currentIndex === 0) {
      return this.renderItemList_All();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Outdoors();
    } else if (this.state.currentIndex === 2) {
      return this.renderItemList_Paint();
    } else if (this.state.currentIndex === 3) {
      return this.renderItemList_Power();
    } else if (this.state.currentIndex === 4) {
      return this.renderItemList_Garden();
    }

  };

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("5%"),
            backgroundColor: "#44bcd8",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <Icon
            onPress={() => {
              this.scroll.scrollTo({ x: wp("80%") });
            }}
            name="ios-arrow-forward"
            size={20}
            color="Black"
          />
        </View>




        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"

            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default withNavigation(Products);