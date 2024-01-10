import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

function ListItem({title,price,image, onPress}:any): React.JSX.Element{
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri:image}}></Image>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    );
}

export default React.memo(ListItem);