import React from "react";
import { View } from "react-native";

// style import
import { styles } from "../style/cardStyle";

interface CardWrapperCommonPropType {
	children: React.ReactNode;
	propStyle: any;
}

const CardWrapperComponent: React.FC<CardWrapperCommonPropType> = props => {
	const { children, propStyle } = props;

	return <View style={{ ...styles.card, ...propStyle }}>{children}</View>;
};

export default CardWrapperComponent;
