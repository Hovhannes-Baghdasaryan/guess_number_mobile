import React from "react";
import { View } from "react-native";

// style import
import { styles } from "./../style/cardStyle";

const CardComponent: React.FC<{ children: any; styleProp: any }> = ({ children, styleProp }) => (
	<View style={{ ...styles.card, ...styleProp }}>{children}</View>
);

export default CardComponent;
