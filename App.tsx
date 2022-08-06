import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

// component import
import GameInProgressScreen from "./src/screens/GameInProgressScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";
import Header from "./src/layout/Header";

// style import
import { styles } from "./src/style/gameStyle";

const App = () => {
	const [userNumber, setUserNumber] = useState<number>(0);
	const [guessRounds, setGuessRounds] = useState<number>(0);

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.appMain}>
				<Header title="Guess a Number" />
				<View style={styles.centerMainCard}>
					{guessRounds !== 0 ? (
						<GameOverScreen
							setGuessRounds={setGuessRounds}
							setUserNumber={setUserNumber}
							userNumber={userNumber}
							guessRounds={guessRounds}
						/>
					) : (
						<>
							{userNumber ? (
								<GameInProgressScreen setUserNumber={setUserNumber} userChoice={userNumber} setGuessRounds={setGuessRounds} />
							) : (
								<StartGameScreen onStartGame={startGameHandler} />
							)}
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default App;
