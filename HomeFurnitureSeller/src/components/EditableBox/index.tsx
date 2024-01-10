import React from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { styles } from "./styles";

function EditableBox({ value, style, label, editable, onChangeText }: any): React.JSX.Element {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.content}>
                <Text style={styles.label}> {label} </Text>
                <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} ></TextInput>

            </View>
        </View>
    );
}

export default React.memo(EditableBox);