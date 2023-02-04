import { useState } from "react"
import { StyleSheet, View } from "react-native"

import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"

import Header from "./src/components/Header"
import GameScreen from "./src/screens/GameScreen"
import StartGameScreen from "./src/screens/StartGameScreen"
import ResultScreen from "./src/screens/ResultScreen"

export default function App() {
  const [loaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
  })
  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")
  const [restart, setRestart] = useState(false)

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
    ) {
      setResult("Win")
    } else {
      setResult("Lose")
    }
    setWinOrLose(true)
  }

  const restartGame = () =>{
    setUserNumber("")
    setRestart(true)
    setWinOrLose(false)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />
  if (userNumber == "" && setRestart){
    content = <StartGameScreen onStartGame={handleStartGame} />
  }
  else if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} restartGame={restartGame} />
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame} />
  }

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        title={"Adivina el Número"}
        newStyles={{ fontFamily: "Pacifico" }}
      />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
