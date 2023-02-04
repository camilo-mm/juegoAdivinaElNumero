import React from "react"
import { StyleSheet, Text, View } from "react-native"
import colors from "../constants/colors"

const Card = ({ newStyles, children }) => {
  return <View style={{ ...styles.container, ...newStyles }}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  container: {
    width: 320,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    borderColor: "black",
    borderWidth: "2px"
  },
})
