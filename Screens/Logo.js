import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => (
  <Image source={require("../assets/crop.png")} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});

export default memo(Logo);
