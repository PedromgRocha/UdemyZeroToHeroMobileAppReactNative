import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

function FavouriteItem({title,price,image, onPress}:any): React.JSX.Element{
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri:image}}></Image>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image source={require('../../assets/close.png')} style={styles.icon}></Image>
        </Pressable>
    );
}

export default React.memo(FavouriteItem);