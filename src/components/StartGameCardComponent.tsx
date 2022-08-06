import React from "react";
import { Button, TextInput } from "react-native";

// type import
import { confirmInputHandlerFunctionType } from "../types/confirmInputHandleType";

// component import
import CardWrapperComponent from "./CardWrapperComponent";

interface StartGameComponentPropType {
	enteredValue: string;
	numberInputHandler: (inputText: string) => void;
	confirmInputHandler: confirmInputHandlerFunctionType;
}

const StartGameCardComponent: React.FC<StartGameComponentPropType> = props => {
	const { enteredValue, numberInputHandler, confirmInputHandler } = props;

	return (
		<CardWrapperComponent propStyle={{}}>
			<TextInput
				style={{ marginBottom: 10, textAlign: "center" }}
				placeholder="Select Number"
				keyboardType="numeric"
				value={enteredValue}
				onChangeText={numberInputHandler}
				maxLength={2}
			/>
			<Button title="Confirm" onPress={() => confirmInputHandler()} />
		</CardWrapperComponent>
	);
};

export default StartGameCardComponent;
