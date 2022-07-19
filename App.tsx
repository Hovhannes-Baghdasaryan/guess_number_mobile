import React from "react";
import { View } from "react-native";

// component import
import Header from "./src/layout/Header";
import StartGameScreen from "./src/screens/StartGameScreen";

const App = () => (
	<View>
		<Header title="Guess a Number" />
		<StartGameScreen />
	</View>
);

export default App;
