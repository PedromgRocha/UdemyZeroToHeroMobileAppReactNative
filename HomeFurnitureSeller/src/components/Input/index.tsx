import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { styles } from "./styles";

function Input({ label, placeHolder, isPassword }: any): React.JSX.Element {
    const [isPasswordVisible, setPasswordIsVisible] = useState(false);

    const onEyePress = (): void => {
        setPasswordIsVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeHolder} style={styles.input} />

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={ isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                ) : null}

            </View>
        </View>
    );
}

export default  React.memo(Input);