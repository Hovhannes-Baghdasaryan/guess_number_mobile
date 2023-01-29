import React, { useEffect, useRef, useState } from "react";
import { View, Button, Alert } from "react-native";

// common-component import
import ShowNumberComponent from "../common/ShowNumberComponent";
import CardComponent from "../common/CardComponent";

// util import
import { generateRandomNumber } from "../util/generateRandomNumber";

// type import
import { GameInProgressScreenPropType } from "../types/gameInProgressType";

// style import
import { styles } from "../style/gameInProgressStyle";

const GameInProgressScreen: React.FC<GameInProgressScreenPropType> = props => {
	const { setUserNumber, userChoice, setGuessRounds } = props;

	// local state
	const [rounds, setRound] = useState<number>(0);
	const [guessNumber, setGuessNumber] = useState(generateRandomNumber(0, 99, userChoice));

	// Ref state
	const highRef = useRef(0);
	const lowRef = useRef(0);

	useEffect(() => {
		if (guessNumber === userChoice) {
			setUserNumber(guessNumber);
			setGuessRounds(rounds);
		}
	}, [guessNumber]);

	const onGuessFinish = () => {
		setUserNumber(0);
	};

	const onButtonPress = (choice: string) => () => {
		if (choice === "higher") {
			if (userChoice > guessNumber) {
				Alert.alert("Don't Lie", "the value is lower");
				return;
			}

			lowRef.current = guessNumber;
		} else {
			if (userChoice < guessNumber) {
				Alert.alert("Don't Lie", "the value is higher");
				return;
			}

			highRef.current = guessNumber;
		}
		setGuessNumber(generateRandomNumber(lowRef.current, highRef.current, guessNumber));
		setRound(prevState => prevState + 1);
	};

	return (
		<CardComponent styleProp={{}}>
			<Button title="Back To Choose New Number" onPress={onGuessFinish} />
			<ShowNumberComponent showNumber={guessNumber} />
			<View style={styles.buttonContainer}>
				<Button title="Lower" onPress={onButtonPress("higher")} />
				<Button title="Higher" onPress={onButtonPress("lower")} />
			</View>
		</CardComponent>
	);
};

export default GameInProgressScreen;
