import React, { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card"

import colors from "../constants/colors"

const GameScreen = ({ handleResult }) => {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>El número del oponente es:</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <View style={styles.lower}>
            <Button
                title="Menor"
                color={"#000"}
                onPress={() => handleResult("lower", currentGuess)}
            />
        </View>
        <View style={styles.lower}>
            <Button
                title="Mayor"
                color={"#000"}
                onPress={() => handleResult("higher", currentGuess)}
            />
        </View>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  textColor: {
    color: "#000",
    fontSize: "25px"
  },
  lower:{
    backgroundColor: "#f9cdd0",
    fontSize: "25px",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: "2px",
  }
})
