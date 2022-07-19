import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

// component import
import Header from "./src/layout/Header";
import StartGameScreen from "./src/screens/StartGameScreen";
import GameInProgressScreen from "./src/screens/GameInProgressScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

// util import
import { dismissOnPress } from "./src/util/dismissOnPress";

const App = () => {
	const [userNumber, setUserNumber] = useState<number>(0);
	const [guessRounds, setGuessRounds] = useState<number>(0);

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
	};

	return (
		<TouchableWithoutFeedback onPress={dismissOnPress}>
			<View style={{ flex: 1 }}>
				<Header title="Guess a Number" />
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
							<GameInProgressScreen
								setUserNumber={setUserNumber}
								userChoice={userNumber}
								setGuessRounds={setGuessRounds}
							/>
						) : (
							<StartGameScreen onStartGame={startGameHandler} />
						)}
					</>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default App;
