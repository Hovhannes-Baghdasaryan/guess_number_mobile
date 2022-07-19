import { StyleSheet } from "react-native";

export const MainStyles = StyleSheet.create({
	gameContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
		paddingVertical: 10,
		width: "100%",
		flex: 1,
	},
	title: {
		fontSize: 22,
		marginBottom: 10,
	},
	button: {
		width: 90,
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: "center",
	},
});

export const CardStyles = StyleSheet.create({
	bottonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		width: "100%",
	},
	inputProp: {
		width: 80,
		textAlign: "center",
	},
	inputContainerProp: {
		width: 400,
		maxWidth: "80%",
		alignItems: "center",
	},
});
