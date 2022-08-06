import { Keyboard } from "react-native";

export const confirmInputHandler = (
	enteredValue: string,
	setSelectedNumber: (userNumber: number) => void,
	setConfirmed: (isConfirmed: boolean) => void,
	setEnteredValue: (inputText: string) => void
) => {
	return () => {
		setConfirmed(true);
		setEnteredValue("");
		setSelectedNumber(+enteredValue);
		Keyboard.dismiss();
	};
};
