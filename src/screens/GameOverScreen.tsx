import React from "react";
import { Button, Text, View } from "react-native";

// component import
import CardWrapperComponent from "../components/CardWrapperComponent";

// style import
import { styles } from "../style/cardStyle";

interface GameOverComponentPropType {
	setUserNumber: (userNum: number) => void;
	setGuessRounds: (num: number) => void;
	userNumber: number;
	guessRounds: number;
}

const GameOverScreen: React.FC<GameOverComponentPropType> = props => {
	const { setGuessRounds, setUserNumber, userNumber, guessRounds } = props;

	const startGameAgain = () => {
		setGuessRounds(0);
		setUserNumber(0);
	};

	return (
		<CardWrapperComponent propStyle={styles.gameOverCard}>
			<View>
				<Text>The Number was {userNumber}</Text>
				<Text style={{ marginBottom: 10 }}>You Guessed after {guessRounds} fails</Text>
			</View>
			<Button title="Start Again" onPress={startGameAgain} />
		</CardWrapperComponent>
	);
};

export default GameOverScreen;
