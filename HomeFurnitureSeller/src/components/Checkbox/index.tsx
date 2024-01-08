import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function Checkbox({checked, onCheck}:any): React.JSX.Element{
    return(
        <TouchableOpacity activeOpacity={0.65} hitSlop={20} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')}></Image>
                </View>
            ): null }
        </TouchableOpacity>
    );
}

export default React.memo(Checkbox);