import React from "react";
import { View, Text, TextInput, Button } from "react-native";

// style import
import { styles } from "./../style/startGameStyle";

// component import
import CardComponent from "./../components/CardComponent";

const StartGameScreen = () => (
	<View style={styles.gameContainer}>
		<Text style={styles.title}>Start a New Game!</Text>
		<CardComponent styleProp={styles.inputContainer}>
			<View style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.bottonContainer}>
					<Button title="Reset" onPress={() => {}} />
					<Button title="Confirm" onPress={() => {}} />
				</View>
			</View>
		</CardComponent>
	</View>
);

export default StartGameScreen;
