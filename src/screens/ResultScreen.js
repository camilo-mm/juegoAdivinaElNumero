import React, { useState, useEffect } from "react"
import { Image, StyleSheet, Text, View, SafeAreaView, Button } from "react-native"
import Card from "../components/Card"
import win from "../../assets/img/win.png"
import lose from "../../assets/img/lose.png"
import colors from "../constants/colors"

const ResultScreen = ({ result, restartGame}) => {
  const [image, setImage] = useState("")
  

  useEffect(() => {
    handleIamge()
  }, [])

  const handleIamge = () => {
    if (result === "Win") {
      setImage(win)
      return
    }
    setImage(lose)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card>
          <Text>{`You ${result}`}</Text>
        </Card>
        <Image style={styles.imageContainer} source={image} />
        <View style={styles.playAgain}>    
            <Button
                title="Jugar de nuevo"
                color={"#000"}
                onPress={restartGame}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
  playAgain: {
    marginTop: 50,
    backgroundColor: "#f58f60",
    borderColor: "black",
    borderWidth: "2px",
    borderRadius: 10,
  }
})
