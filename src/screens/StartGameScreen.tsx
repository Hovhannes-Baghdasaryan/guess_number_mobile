import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";

// util import
import { confirmInputHandler } from "../util/confirmInputHandler";

// component import
import StartGameCardComponent from "../components/StartGameCardComponent";
import CardComponent from "../common/CardComponent";

// style import
import { MainStyles } from "./../style/startGameStyle";
import { styles } from "../style/cardStyle";

type startGameHandlerType = (selectedNumber: number) => void;

const StartGameScreen: React.FC<{ onStartGame: startGameHandlerType }> = ({ onStartGame }) => {
	const [selectedNumber, setSelectedNumber] = useState<number>(0);
	const [enteredValue, setEnteredValue] = useState<string>("");
	const [confirmed, setConfiremed] = useState<boolean>(false);

	const numberInputHandler = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	return (
		<View style={MainStyles.gameContainer}>
			<Text style={MainStyles.title}>Start a New Game!</Text>
			<StartGameCardComponent
				enteredValue={enteredValue}
				numberInputHandler={numberInputHandler}
				confirmInputHandler={confirmInputHandler(enteredValue, setSelectedNumber, setConfiremed, setEnteredValue)}
			/>
			{confirmed && (
				<CardComponent styleProp={MainStyles.summaryContainer}>
					<Text>You Selected</Text>
					<View style={styles.confirmedNumberCard}>
						<Text style={{ fontSize: 25 }}>{selectedNumber}</Text>
					</View>
					<Button title="start game" onPress={() => onStartGame(selectedNumber)} />
				</CardComponent>
			)}
		</View>
	);
};

export default StartGameScreen;
