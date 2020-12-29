import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { getProducts, searchProducts } from '../Store/Actions/index';
import Icon from "react-native-vector-icons/FontAwesome5";

class Searchbar extends Component {
  componentDidMount() {
    this.props.getProducts();
  }



  state = {
    searchQuery: ''
  }



  searchHandler = (query) => {
    this.setState({ searchQuery: query });
    this.props.searchProducts(query);
  }
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
    this.props.navigation.navigate("ProductsDetails", { newProducts })
    return (
      { newProducts }

    )

  }
  render() {

    let productsList = (

      <View style={styles.container}>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Icon style={{ padding: 5 }} name="chevron-left" size={20} color="#000" onPress={() => this.props.navigation.navigate("AllProducts")} />
          <TextInput
            style={styles.searchBar}
            onChangeText={(query) => this.searchHandler(query)}
            value={this.state.searchQuery}
            placeholder={"   Search products..."}
          />
        </View>
        <View style={styles.productsContainer}>

          <FlatList
            style={styles.productList}
            data={this.props.products}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>


              <View style={styles.product}  >
                <Text style={styles.productName} onPress={() => {
                  this.props.navigation.navigate("ProductDetails", { newProducts: item });

                }}>{item.name}</Text>

              </View>
            }

          />
        </View>
      </View>
    );
    if (this.props.isLoading) {
      productsList = (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {productsList}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  searchBar: {
    width: '95%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 3,
    padding: 5,
    marginBottom: 10,
    height: 40,
    color: '#000'
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    height: '80%'
  },
  product: {
    backgroundColor: '#eee',
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    padding: 10
  },
  productList: {
    width: '100%'
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  productDescription: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.7)'
  },
  productPrice: {
    fontSize: 17,
    color: '#0090FF',
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    products: state.products.searchResults,
    isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    searchProducts: (query) => dispatch(searchProducts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);