import React from "react";
import { Text, View } from "react-native";

// style import
import { styles } from "../style/cardStyle";

const ShowNumberComponent: React.FC<{ showNumber: number }> = props => {
	const { showNumber } = props;

	return (
		<View style={styles.confirmedNumberCard}>
			<Text style={{ fontSize: 25, textAlign: "center" }}>{showNumber}</Text>
		</View>
	);
};

export default ShowNumberComponent;
