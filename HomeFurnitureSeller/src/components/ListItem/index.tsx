import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";

function ListItem({ title, subtitle, onPress, style }: any): React.JSX.Element {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={styles.content}>
                <Text style={styles.title}> {title} </Text>

                {!! subtitle ? (
                    <Text style={styles.subtitle}> {subtitle} </Text>
                ) : null }
                
            </View>

            <Image style={styles.arrow} source={require('../../assets/arrow.png')}></Image>

        </Pressable>
    );
}

export default React.memo(ListItem);