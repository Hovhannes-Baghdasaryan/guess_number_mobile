import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";

// util import
import { confirmInputHandler } from "../util/confirmInputHandler";

// component import
import StartGameCardComponent from "../components/StartGameCardComponent";
import NumberComponent from "../components/NumberComponent";
import CardComponent from "./../components/CardComponent";

// style import
import { MainStyles } from "./../style/startGameStyle";

// type import
import { onStartGameType } from "../types/startGameType";

const StartGameScreen: React.FC<{ onStartGame: onStartGameType }> = ({ onStartGame }) => {
	const [selectedNumber, setSelectedNumber] = useState<number>(0);
	const [enteredValue, setEnteredValue] = useState<string>("");
	const [confirmed, setConfiremed] = useState<boolean>(false);

	const numberInputHandler = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setEnteredValue("");
		setConfiremed(false);
	};

	const confirmInputHandlerCall = confirmInputHandler(
		enteredValue,
		setSelectedNumber,
		setConfiremed,
		setEnteredValue,
		resetInputHandler
	);

	return (
		<View style={MainStyles.gameContainer}>
			<Text style={MainStyles.title}>Start a New Game!</Text>
			<StartGameCardComponent
				enteredValue={enteredValue}
				numberInputHandler={numberInputHandler}
				confirmInputHandler={confirmInputHandlerCall}
			/>
			{confirmed && (
				<CardComponent styleProp={MainStyles.summaryContainer}>
					<Text>You Selected</Text>
					<NumberComponent>{selectedNumber}</NumberComponent>
					<Button title="start game" onPress={() => onStartGame(selectedNumber)} />
				</CardComponent>
			)}
		</View>
	);
};

export default StartGameScreen;
