import React from "react";
import {
  SafeAreaView, View, Text, StyleSheet, ScrollView
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import CategoriesScreen from "../Screens/CategoriesScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";
import WishListScreen from "../Screens/WishListScreen";
import CartScreen from "../Screens/CartScreen";
import CategoriesProductsScreen from "../Screens/CategoriesProductsScreen";
import ProductsDetailScreen from "../Screens/ProductsDetailScreen";
import OrdersScreen from "../Screens/OrdersScreen";
import HomeScreen from "../Screens/HomeScreen";
import OTP from "../Screens/OTP";
import chart from "../Screens/chat"
import LoginScreen1 from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import About from "../Screens/Aboutscreen";
import location from "../Screens/location";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import productRemove from "../components/productRemove"
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";
import Imageupload from "../components/imageupload";
import Searchbar from "../Screens/Searchbar";
import logout from "../Screens/logout"
import chat from "../Screens/chat"
const defaultOptionsForStack = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#44bcd8",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 18,
    },
  },
};
const CategoriesStack = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: " Categories",
      },
    },
    CategoriesProducts: {
      screen: CategoriesProductsScreen,
    },
    ProductDetails: {
      screen: ProductsDetailScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  defaultOptionsForStack
);

const AllProductsStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },

    LoginScreen: {
      screen: LoginScreen1,
      navigationOptions: {
        header: null,
      }
    },


    OTP: {
      screen: OTP,
      navigationOptions: {
        header: null,
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        header: null,
      }

    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      }
    },
    location: {
      screen: location,
      navigationOptions: {
        headerTitle: false,
        header: false
      }

    },
    Searchbar: {
      screen: Searchbar,
      navigationOptions: {
        header: false,
        headerTitle: false
      }
    },
    order: {
      screen: OrdersScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Orders",
      }),
    },
    AllProducts: {
      screen: AllProductsScreen,

      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Discover",
      }),
    },
    ProductDetails: {
      screen: ProductsDetailScreen,
    },
    Cart: {
      screen: CartScreen,
    },


  },

  defaultOptionsForStack
);

const WishListStack = createStackNavigator(
  {
    WishList: {
      screen: WishListScreen,

    },
    ProductDetails: {
      screen: ProductsDetailScreen,

    },
    Cart: {
      screen: CartScreen,
    },
  },
  defaultOptionsForStack
);

const CartStack = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        headerTitle: "Items in Cart",
      },
    },
  },
  defaultOptionsForStack
);
const Chat = createStackNavigator(
  {
    chat: {
      screen: chat,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "My Chats"
      }),
    },
  },
  defaultOptionsForStack
);
const Logout = createStackNavigator(
  {
    logout: {
      screen: logout,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Logout"
      }),
    },
  },
  defaultOptionsForStack
);
const Loginmodule = createStackNavigator({

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },

  OTP: {
    screen: OTP,
    navigationOptions: {
      header: null,
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null,
    }

  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    }

  },
}, defaultOptionsForStack,
)
const ImageupLoad = createStackNavigator({
  Imageupload: {
    screen: Imageupload,
    navigationOptions: ({ navigation }) => ({


      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerTitle: "List My Product To Rent",
    }),
  },
}, defaultOptionsForStack);

const ProductRemove = createStackNavigator(
  {
    productRemove: {
      screen: productRemove,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Remove My Products",
      }),

    },
  },
  defaultOptionsForStack
);

const TabNavigator = createBottomTabNavigator(
  {

    Products: {
      screen: AllProductsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="home" size={22} color={tintColor} />;
        },
      },
    },
    Categories: {
      screen: CategoriesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <FontAwesome name="th" size={20} color={tintColor} />;
        },
      },
    },
    "Wish List": {
      screen: WishListStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Fontisto name="heart" size={20} color={tintColor} />;
        },
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="shopping-cart" size={20} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#44bcd8",
      inactiveTintColor: "black",
      tabStyle: {
        height: 50,
        zIndex: 99,
        borderColor: "white",
        borderTopWidth: 0,
      },
      labelStyle: {
        fontSize: 12,
        paddingTop: 2,
        paddingBottom: 3,
        fontFamily: "halfmoon_bold",
      },
    },
  }
);

AllProductsStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'RegisterScreen') {
    tabBarVisible = false
  }
  else if (routeName == 'About') {
    tabBarVisible = false
  }
  else if (routeName == 'OTP') {
    tabBarVisible = false
  }
  else if (routeName == 'HomeScreen') {
    tabBarVisible = false
  } else if (routeName == 'LoginScreen') {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}
const NavigationDrawer = createDrawerNavigator({
  Products: {
    screen: TabNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="home" size={20} color={tintColor} />
      }
    }
  },
  Categories: {
    screen: CategoriesStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="th-list" size={20} color={tintColor} />
      }
    }
  },

  "Wish List": {
    screen: WishListStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Fontisto name="heart" size={20} color={tintColor} />
      }
    }
  },
  "List My Product To Rent ": {
    screen: ImageupLoad,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="upload" size={20} color={tintColor} />
      }
    }
  },

  "Remove My Products ": {
    screen: ProductRemove,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="trash" size={20} color={tintColor} />

      }
    }
  },
  "My Chats": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  Logout: {
    screen: Logout,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="power-off" size={22} color={tintColor} />
      }
    }
  }



},


  {
    contentComponent: (props) => (
      <SafeAreaView>
        <View style={stylesSidebar.sideMenuContainer}>
          <View style={stylesSidebar.profileHeader}>
            <View style={stylesSidebar.profileHeaderPicCircle}>
              <Text style={{ fontSize: 25, color: "#05075d" }}>
                {"About React".charAt(0)}
              </Text>
            </View>
            <Text style={stylesSidebar.profileHeaderText}>PROFILE</Text>
          </View>

          <View style={stylesSidebar.profileHeaderLine} />
          <View style={{ width: "100%", flex: 1 }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 20,
                  color: "white",
                  backgroundColor: "white",
                }}
              >
                <DrawerItems {...props} /></View>
            </ScrollView></View></View>
      </SafeAreaView>

    )
  });

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44bcd8",
    paddingTop: 40,
    color: "rgb(0,0,0)",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#44bcd8",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "rgb(0,0,0)",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "rgb(0,0,0)",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "rgb(0,0,0)",
    marginTop: 15,
    marginBottom: 10,
  },
});
const AppContainer = createAppContainer(NavigationDrawer);

export default AppContainer;
