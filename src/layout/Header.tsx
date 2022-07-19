import React from "react";
import { Text, View } from "react-native";

// style import
import { styles } from "./../style/headerStyle";

const Header: React.FC<{ title: string }> = ({ title }) => (
	<View style={styles.header}>
		<Text style={styles.headerTitle}>{title}</Text>
	</View>
);

export default Header;
