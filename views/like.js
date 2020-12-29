import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const numHeart = 1;

export default class like extends React.Component {
  state = {
    rating: 0,
    animation: new Animated.Value(0)
  };
  rate = heart => {
    this.setState({ rating: heart });
  };

  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      this.state.animation.setValue(1);
    });
  };

  render() {
    let heart = [];

    const animateScale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1]
    });

    const animateOpacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.5, 1]
    });

    const animateWobble = this.state.animation.interpolate({
      inputRange: [1, 1.25, 1.75, 2],
      outputRange: ["0deg", "-3deg", "3deg", "0deg"]
    });

    const animationStyle = {
      transform: [{ scale: animateScale }],
      opacity: animateOpacity
    };

    for (let x = 1; x <= numHeart; x++) {
      heart.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x), this.animate();
          }}
        >
          <Animated.View style={x <= this.state.rating ? animationStyle : ""}>
            <Heart filled={x <= this.state.rating ? true : false} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <View>
        <View style={{ flexDirection: "row" }}>{heart}</View>
      </View>
    );
  }
}

class Heart extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled === true ? "heart" : "heart-o"}
        color="red"
        size={17}
        style={{ marginHorizontal: 2 }}
      />
    );
  }
}
