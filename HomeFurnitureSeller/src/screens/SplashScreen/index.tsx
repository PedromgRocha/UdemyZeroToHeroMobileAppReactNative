import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";

function Splash(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/splash_image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> You'll fild  Here!</Text>
                <Text style= {[styles.title, styles.innerTittle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title={"Sign Up"} />

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}> Sing in</Text>
            </Pressable> 
        </SafeAreaView>
    );
}

export default React.memo(Splash);