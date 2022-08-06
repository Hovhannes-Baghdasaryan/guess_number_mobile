export type confirmInputHandlerFunctionType = (
	setSelectedNumber?: (userNumber: number) => void,
	setConfirmed?: (isConfirmed: boolean) => void,
	setEnteredValue?: (inputText: string) => void,
	enteredValue?: string
) => void;
