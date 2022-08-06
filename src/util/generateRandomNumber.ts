type generateRandomNumberFunctionType = (max: number, min: number, exclude: number) => number;

export const generateRandomNumber: generateRandomNumberFunctionType = (max, min, exclude) => {
	const random = Math.round(Math.random() * (max - min) + min);
	if (random === exclude) return generateRandomNumber(min, max, random);
	else return random;
};
