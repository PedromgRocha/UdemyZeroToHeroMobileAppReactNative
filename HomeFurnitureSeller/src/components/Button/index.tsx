import React from "react";
import { Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function Button({title, onPress, style}:any): React.JSX.Element{
    return(
        <TouchableOpacity activeOpacity={0.65} hitSlop={20} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(Button);