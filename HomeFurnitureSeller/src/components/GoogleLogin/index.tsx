import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from './styles';


function GoogleLogin(): React.JSX.Element{
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')}></Image>
        </TouchableOpacity>
    );
}

export default React.memo(GoogleLogin);