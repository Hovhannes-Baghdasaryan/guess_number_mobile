import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		shadowColor: "purple",
		backgroundColor: "white",
		shadowOffset: { width: 0, height: 2 },
		elevation: 10,
		padding: 25,
		marginVertical: 20,
		borderRadius: 15,
	},
	confirmedNumberCard: {
		backgroundColor: "white",
		borderColor: "purple",
		borderWidth: 3,
		padding: 20,
		marginVertical: 20,
		borderRadius: 15,
	},
	gameOverCard: {
		justifyContent: "center",
	},
});
